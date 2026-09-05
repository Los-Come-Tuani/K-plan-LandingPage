import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
type Props = { id: string; title?: string; intro?: string; children: ReactNode; className?: string };
export function SectionShell({ id, title, intro, children, className }: Props) {
  return <section id={id} className={cn('section', className)} aria-labelledby={title ? id + '-title' : undefined}><div className="container">
    {(title || intro) && <div className="section-heading">{title && <h2 id={id + '-title'}>{title}</h2>}{intro && <p>{intro}</p>}</div>}{children}
  </div></section>;
}
