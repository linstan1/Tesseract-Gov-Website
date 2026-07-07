import React, { useEffect, useRef, useState } from 'react';

interface MermaidProps {
  chart: string;
  /** Stable id base for the rendered diagram. */
  id?: string;
  /** Optional accessible description. */
  ariaLabel?: string;
}

/**
 * Client-side Mermaid renderer. Renders nothing meaningful during SSR /
 * prerender (Mermaid needs the DOM), so a static fallback list should sit
 * alongside it in the page for no-JS and crawler contexts.
 */
export const Mermaid: React.FC<MermaidProps> = ({ chart, id = 'mmd', ariaLabel }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
          theme: 'base',
          themeVariables: {
            primaryColor: '#eef6f5',
            primaryBorderColor: '#3a9e99',
            primaryTextColor: '#313b45',
            lineColor: '#9bb7b4',
            secondaryColor: '#f8fafa',
            tertiaryColor: '#ffffff',
            fontSize: '14px',
          },
        });
        const renderId = `${id}-${Math.abs(hash(chart))}`;
        const { svg: out } = await mermaid.render(renderId, chart);
        if (alive) setSvg(out);
      } catch {
        if (alive) setFailed(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, [chart, id]);

  if (failed) return null;

  return (
    <div
      ref={ref}
      role="img"
      aria-label={ariaLabel}
      className="mermaid-diagram w-full overflow-x-auto flex justify-center"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

// tiny deterministic hash so the render id is stable per chart (no Math.random in id)
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h;
}
