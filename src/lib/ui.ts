/**
 * Outline/ghost button styling for use ON TOP of the brand gradient (where text
 * must stay white). The default shadcn `outline` variant forces `bg-background`,
 * which renders white-on-white in light mode, this overrides that so the button
 * stays visible in both themes.
 */
export const outlineOnGradient =
  'bg-transparent border border-white/50 text-white hover:bg-white/15 hover:text-white';

/** Secondary (solid white) button on the brand gradient. */
export const solidOnGradient = 'bg-white text-orixis-blue hover:bg-white/90';
