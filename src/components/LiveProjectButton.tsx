import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  href?: string;
}

export function LiveProjectButton({ href = '#' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-2 border-[var(--card-border)] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[var(--page-fg)] transition-colors duration-200 hover:bg-[var(--button-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--page-fg)] sm:px-10 sm:py-3.5 sm:text-base"
    >
      Live Project
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
