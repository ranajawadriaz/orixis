import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Animation delay in seconds (great for staggering grids). */
  delay?: number;
  /** Initial vertical offset in px. */
  y?: number;
  as?: 'div' | 'section' | 'li' | 'span';
} & Omit<HTMLMotionProps<'div'>, 'children'>;

/**
 * Fades + rises content into view on scroll. Honours prefers-reduced-motion,
 * in which case content simply appears.
 */
export const Reveal = ({ children, className, delay = 0, y = 26, as = 'div', ...rest }: RevealProps) => {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
};

/** Subtle hover lift for interactive cards. */
export const hoverLift = {
  whileHover: { y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } },
} as const;
