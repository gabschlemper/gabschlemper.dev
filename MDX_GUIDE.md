# MDX Blog System - Quick Reference

## 📁 File Structure

```
src/
├── content/blog/          ← Your blog posts live here
│   ├── en/               ← English posts
│   │   ├── post-1.mdx
│   │   └── post-2.mdx
│   ├── pt/               ← Portuguese posts
│   └── es/               ← Spanish posts
├── lib/blog.ts           ← Blog post loader utilities
├── types/mdx.d.ts        ← TypeScript definitions
└── pages/
    ├── Blog.tsx          ← Blog list page
    └── BlogPost.tsx      ← Individual post page
```

## ✍️ How to Create a New Blog Post

### 1. Create a new `.mdx` file

```bash
# Choose the language folder
src/content/blog/en/my-new-post.mdx
src/content/blog/pt/meu-novo-post.mdx
src/content/blog/es/mi-nuevo-post.mdx
```

### 2. Add frontmatter (metadata) at the top

```mdx
---
title: "Your Post Title"
date: "2025-11-11"
excerpt: "A short summary of your post (shows in blog list)"
slug: "your-post-slug"
tags: ["React", "TypeScript", "Performance"]
language: "en"
author: "Gabriela Schlemper"
---

# Your Post Title

Your content here...
```

### 3. Write your content using Markdown

```mdx
## Headings

# H1
## H2
### H3

## Text Formatting

**Bold text**
*Italic text*
~~Strikethrough~~

## Links

[Link text](https://example.com)

## Lists

- Item 1
- Item 2
  - Nested item

1. First
2. Second

## Code Blocks

```tsx
const example = () => {
  console.log('Hello!');
};
```

## Images

![Alt text](/images/example.png)

## Blockquotes

> This is a quote

## Tables

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

### 4. Save and it's live!

No build step needed in dev mode - just save and refresh!

## 🎨 Using React Components in MDX

You can import and use React components:

```mdx
---
title: "Interactive Post"
---

import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';

# My Interactive Post

Here's a button in my blog post:

<Button onClick={() => alert('Hello!')}>
  Click me
</Button>

And an alert:

<Alert>
  This is important information!
</Alert>
```

## 🔍 How It Works

1. **Build Time:**
   - Vite scans `src/content/blog/**/*.mdx`
   - Converts each MDX → React component
   - Extracts frontmatter metadata
   - Bundles into your app

2. **Runtime:**
   - `getBlogPostsByLanguage()` filters by language
   - `getBlogPost()` fetches specific post
   - Component renders as regular React

## 📝 Frontmatter Fields Explained

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Post title | "Optimizing React" |
| `date` | ✅ | ISO date | "2025-11-11" |
| `excerpt` | ✅ | Short summary | "Learn how to..." |
| `slug` | ✅ | URL path | "optimizing-react" |
| `tags` | ✅ | Array of tags | ["React", "Performance"] |
| `language` | ✅ | Post language | "en", "pt", "es" |
| `author` | ❌ | Author name | "Gabriela Schlemper" |

## 🚀 Deploy

Just commit and push:

```bash
git add src/content/blog/
git commit -m "Add new blog post"
git push
```

Vercel builds automatically and your post is live!

## 💡 Tips

1. **Slug must be unique** within each language
2. **Date format:** Always use `YYYY-MM-DD`
3. **Tags:** Use consistent capitalization
4. **Images:** Put in `/public/images/blog/`
5. **Drafts:** Don't commit the file until ready

## 🐛 Troubleshooting

### Post not showing up?
- Check frontmatter format (YAML syntax)
- Ensure all required fields are present
- Check file is in correct language folder
- Restart dev server

### TypeScript errors?
- Check `src/types/mdx.d.ts` is present
- Restart TypeScript server (VS Code: Cmd+Shift+P → "Restart TS Server")

### Styling looks wrong?
- Check Tailwind Typography plugin is installed
- Verify `prose` classes in BlogPost.tsx

## 📚 Resources

- [MDX Documentation](https://mdxjs.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
