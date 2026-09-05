import type { AnchorHTMLAttributes } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'secondary' | 'light' | 'text'; arrow?: boolean };
export function ButtonLink({ children, className, variant = 'primary', arrow = true, ...props }: Props) {
  return <a className={cn('button', 'button--' + variant, className)} {...props}>{children}{arrow && <ArrowUpRight size={18} aria-hidden="true" />}</a>;
}
