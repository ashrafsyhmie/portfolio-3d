import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isLightMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isLightMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed bottom-24 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-[var(--button-border)] bg-[var(--button-bg)] text-[var(--button-text)] shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--page-fg)] sm:bottom-28 sm:right-7 sm:h-14 sm:w-14"
      aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
      aria-pressed={isLightMode}
    >
      {isLightMode ? (
        <Moon size={18} strokeWidth={1.8} aria-hidden="true" />
      ) : (
        <Sun size={18} strokeWidth={1.8} aria-hidden="true" />
      )}
    </button>
  );
}
