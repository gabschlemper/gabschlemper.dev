import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  children?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';

  if (!children) {
    return null;
  }

  // Inline code
  if (!language) {
    return (
      <code className="text-primary bg-muted px-1.5 py-0.5 rounded text-sm font-mono before:content-[''] after:content-['']">
        {children}
      </code>
    );
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(String(children));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Code block with syntax highlighting
  return (
    <div className="relative group my-6">
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 z-10 p-2 rounded-md bg-slate-700/80 hover:bg-slate-600 transition-colors opacity-0 group-hover:opacity-100"
        title="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-slate-200" />
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '0.5rem',
          padding: '1.5rem',
          fontSize: '0.875rem',
          lineHeight: '1.7',
          margin: 0,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        }}
        showLineNumbers={false}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  );
};

export const MDXComponents = {
  code: CodeBlock,
  h1: (props: any) => <h1 className="text-4xl font-bold mt-12 mb-6 leading-tight text-foreground" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-12 mb-6 border-b border-border pb-3 leading-snug text-foreground" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mt-8 mb-4 leading-snug text-foreground" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-bold mt-6 mb-3 text-foreground" {...props} />,
  p: (props: any) => <p className="text-foreground/90 leading-[1.8] mb-6 text-base" {...props} />,
  ul: (props: any) => <ul className="my-6 space-y-2 list-disc ml-6" {...props} />,
  ol: (props: any) => <ol className="my-6 space-y-2 list-decimal ml-6" {...props} />,
  li: (props: any) => <li className="text-foreground/90 leading-[1.8] marker:text-primary" {...props} />,
  a: (props: any) => <a className="text-primary font-medium no-underline hover:text-primary/80 hover:underline transition-colors" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-primary bg-muted/30 pl-6 pr-4 py-4 my-8 rounded-r text-foreground/80" {...props} />,
  strong: (props: any) => <strong className="text-foreground font-semibold" {...props} />,
  em: (props: any) => <em className="text-foreground/90 italic" {...props} />,
  hr: (props: any) => <hr className="border-border my-12" {...props} />,
};
