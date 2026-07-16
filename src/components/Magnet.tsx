import { useEffect, useRef, useState, type PropsWithChildren } from 'react';

interface MagnetProps extends PropsWithChildren {
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

interface MagnetPosition {
  x: number;
  y: number;
  active: boolean;
}

export function Magnet({
  children,
  padding = 100,
  strength = 4,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<MagnetPosition>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const insideExpandedBounds =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!insideExpandedBounds) {
        setPosition((current) =>
          current.active || current.x !== 0 || current.y !== 0
            ? { x: 0, y: 0, active: false }
            : current,
        );
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      setPosition({
        x: (event.clientX - centerX) / strength,
        y: (event.clientY - centerY) / strength,
        active: true,
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [padding, strength]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
