import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const GATEWAY = 'https://connector-gateway.lovable.dev/google_search_console';
const SITE = 'https://gabschlemper.dev/';
const SITEMAP = 'https://gabschlemper.dev/sitemap.xml';

function authHeaders() {
  const lov = Deno.env.get('LOVABLE_API_KEY');
  const gsc = Deno.env.get('GOOGLE_SEARCH_CONSOLE_API_KEY');
  if (!lov) throw new Error('LOVABLE_API_KEY is not configured');
  if (!gsc) throw new Error('GOOGLE_SEARCH_CONSOLE_API_KEY is not configured');
  return {
    Authorization: `Bearer ${lov}`,
    'X-Connection-Api-Key': gsc,
    'Content-Type': 'application/json',
  };
}

async function gw(path: string, init: RequestInit = {}) {
  const res = await fetch(`${GATEWAY}${path}`, {
    ...init,
    headers: { ...authHeaders(), ...(init.headers || {}) },
  });
  const text = await res.text();
  let json: unknown;
  try { json = JSON.parse(text); } catch { json = text; }
  return { ok: res.ok, status: res.status, body: json };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  const url = new URL(req.url);
  const action = url.searchParams.get('action') ?? 'status';

  try {
    if (action === 'get-token') {
      const r = await gw('/siteVerification/v1/token', {
        method: 'POST',
        body: JSON.stringify({
          site: { identifier: SITE, type: 'SITE' },
          verificationMethod: 'META',
        }),
      });
      return new Response(JSON.stringify(r), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (action === 'verify-and-submit') {
      const verify = await gw('/siteVerification/v1/webResource?verificationMethod=META', {
        method: 'POST',
        body: JSON.stringify({ site: { identifier: SITE, type: 'SITE' } }),
      });
      if (!verify.ok) {
        return new Response(JSON.stringify({ step: 'verify', ...verify }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }

      const addSite = await gw(`/webmasters/v3/sites/${encodeURIComponent(SITE)}`, { method: 'PUT' });

      const submitSitemap = await gw(
        `/webmasters/v3/sites/${encodeURIComponent(SITE)}/sitemaps/${encodeURIComponent(SITEMAP)}`,
        { method: 'PUT' },
      );

      return new Response(JSON.stringify({ verify, addSite, submitSitemap }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'list-sites') {
      const r = await gw('/webmasters/v3/sites');
      return new Response(JSON.stringify(r), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ error: 'unknown action' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ error: msg }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
