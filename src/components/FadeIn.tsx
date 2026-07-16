import {
  motion,
  type TargetAndTransition,
  type Variants,
} from 'framer-motion';
import {
  createElement,
  useMemo,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react';

type FadeInProps<T extends ElementType = 'div'> = {
  as?: T;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

const easing = [0.25, 0.1, 0.25, 1] as const;

export function FadeIn<T extends ElementType = 'div'>({
  as,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...props
}: FadeInProps<T>) {
  const element = (as ?? 'div') as ElementType;
  const MotionComponent = useMemo(
    () => motion.create(element as never),
    [element],
  );

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration,
        ease: easing,
      },
    } as TargetAndTransition,
  };

  return createElement(MotionComponent, {
    ...props,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '50px', amount: 0 },
    variants,
  });
}
