import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiRedis,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { Sparkles } from 'lucide-react';

type TechMeta = {
  /** Brand colour, or null to inherit the current text colour (e.g. dark logos). */
  color: string | null;
  Icon: IconType;
};

/** Brand logo + colour for each technology we showcase. */
export const TECH: Record<string, TechMeta> = {
  React: { color: '#61DAFB', Icon: SiReact },
  'React Native': { color: '#61DAFB', Icon: SiReact },
  'Next.js': { color: null, Icon: SiNextdotjs },
  'Node.js': { color: '#5FA04E', Icon: SiNodedotjs },
  Python: { color: '#3776AB', Icon: SiPython },
  TypeScript: { color: '#3178C6', Icon: SiTypescript },
  TensorFlow: { color: '#FF6F00', Icon: SiTensorflow },
  AWS: { color: '#FF9900', Icon: FaAws },
  Docker: { color: '#2496ED', Icon: SiDocker },
  Kubernetes: { color: '#326CE5', Icon: SiKubernetes },
  MongoDB: { color: '#47A248', Icon: SiMongodb },
  PostgreSQL: { color: '#4169E1', Icon: SiPostgresql },
  Redis: { color: '#FF4438', Icon: SiRedis },
};

const FALLBACK: TechMeta = { color: '#0D9488', Icon: Sparkles as unknown as IconType };

export function getTech(name: string): TechMeta {
  return TECH[name] ?? FALLBACK;
}

/** A small inline brand icon for use inside badges/lists. */
export const TechGlyph = ({ name, size = 18 }: { name: string; size?: number }) => {
  const { Icon, color } = getTech(name);
  return <Icon size={size} style={color ? { color } : undefined} aria-hidden />;
};
