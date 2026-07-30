import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ResearchTopicGroupProps {
  title: string;
  count: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

// Collapsible topic group used on /research. Rendered as a native <details>
// element so the content stays in the server-rendered DOM (crawlable) and the
// toggle works without JavaScript.
export const ResearchTopicGroup: React.FC<ResearchTopicGroupProps> = ({ title, count, defaultOpen = false, children }) => {
  return (
    <details className="group bg-white border border-gov-border/50 rounded-2xl overflow-hidden hover:border-gov-border transition-colors" open={defaultOpen}>
      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden hover:bg-gov-blue/5 transition-colors">
        <span className="flex items-baseline gap-3 min-w-0">
          <span className="text-lg font-bold text-gov-dark">{title}</span>
          <span className="text-xs font-semibold text-gov-blue bg-gov-blue/10 rounded-full px-2.5 py-0.5 flex-shrink-0" aria-label={`${count} items`}>{count}</span>
        </span>
        <ChevronDown className="w-5 h-5 text-gov-blue flex-shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="px-6 pb-6 border-t border-gov-border/40">
        {children}
      </div>
    </details>
  );
};
