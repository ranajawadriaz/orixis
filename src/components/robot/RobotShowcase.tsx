import { Component, Suspense, useCallback, useMemo, useState, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Html } from '@react-three/drei';
import {
  Bot, Hand, Check, X, ThumbsUp, Footprints, Rabbit, ArrowUp, ArrowUpRight, Music, Zap,
  Armchair, User, Skull, Play, MousePointer2, type LucideIcon,
} from 'lucide-react';
import RobotModel, { clipBaseName } from './RobotModel';

/** Catches WebGL/runtime errors so a failed canvas never breaks the page. */
class CanvasErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

// Friendly label + icon for each animation clip, in the order we want to show them.
const MOVES: Record<string, { label: string; Icon: LucideIcon }> = {
  Idle: { label: 'Idle', Icon: Bot },
  Wave: { label: 'Wave', Icon: Hand },
  Yes: { label: 'Nod Yes', Icon: Check },
  No: { label: 'Shake No', Icon: X },
  ThumbsUp: { label: 'Thumbs Up', Icon: ThumbsUp },
  Walking: { label: 'Walk', Icon: Footprints },
  Running: { label: 'Run', Icon: Rabbit },
  Jump: { label: 'Jump', Icon: ArrowUp },
  WalkJump: { label: 'Leap', Icon: ArrowUpRight },
  Dance: { label: 'Dance', Icon: Music },
  Punch: { label: 'Punch', Icon: Zap },
  Sitting: { label: 'Sit', Icon: Armchair },
  Standing: { label: 'Stand', Icon: User },
  Death: { label: 'Faint', Icon: Skull },
};
const ORDER = Object.keys(MOVES);

const supportsWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && canvas.getContext('webgl'));
  } catch {
    return false;
  }
};

const Fallback = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-orixis-text-muted">
    <Bot size={56} className="text-orixis-teal" />
    <p className="text-sm">Your device can't render the 3D robot, but the rest works great!</p>
  </div>
);

const RobotShowcase = () => {
  const [clips, setClips] = useState<string[]>([]);
  const [current, setCurrent] = useState('');
  const webgl = useMemo(supportsWebGL, []);

  const idleClip = useCallback(
    (list: string[]) => list.find((c) => clipBaseName(c) === 'Idle') ?? list[0] ?? '',
    [],
  );

  const handleReady = useCallback(
    (names: string[]) => {
      setClips(names);
      setCurrent((prev) => prev || idleClip(names));
    },
    [idleClip],
  );

  const handleFinished = useCallback(() => {
    setCurrent((prev) => idleClip(clips) || prev);
  }, [clips, idleClip]);

  // Order + de-duplicate the clip buttons.
  const orderedClips = useMemo(() => {
    return [...clips].sort((a, b) => {
      const ia = ORDER.indexOf(clipBaseName(a));
      const ib = ORDER.indexOf(clipBaseName(b));
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
  }, [clips]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-orixis-text/10 bg-gradient-card shadow-2xl">
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-orixis-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-orixis-purple/20 blur-3xl" />

      <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-orixis-bg/70 px-3 py-1.5 text-xs font-medium text-orixis-text-muted backdrop-blur">
        <MousePointer2 size={14} /> Drag to rotate
      </div>

      {/* 3D stage */}
      <div className="h-[340px] sm:h-[440px] lg:h-[480px] w-full">
        {webgl ? (
          <CanvasErrorBoundary fallback={<Fallback />}>
            <Canvas shadows dpr={[1, 2]} gl={{ alpha: true, antialias: true }} camera={{ position: [0, 1.9, 6.5], fov: 42 }}>
              <ambientLight intensity={0.7} />
              <hemisphereLight args={['#ffffff', '#334155', 0.5]} />
              <directionalLight position={[5, 8, 5]} intensity={1.3} castShadow shadow-mapSize={[1024, 1024]} />
              <directionalLight position={[-6, 4, -4]} intensity={0.45} color="#7C3AED" />
              <pointLight position={[0, 2, 4]} intensity={0.5} color="#14B8A6" />

              <Suspense
                fallback={
                  <Html center>
                    <div className="flex flex-col items-center gap-2 text-orixis-text-muted">
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-orixis-teal border-t-transparent" />
                      <span className="text-xs whitespace-nowrap">Loading robot…</span>
                    </div>
                  </Html>
                }
              >
                <RobotModel clip={current} onReady={handleReady} onFinished={handleFinished} />
                <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={10} blur={2.6} far={4} />
              </Suspense>

              <OrbitControls
                enablePan={false}
                target={[0, 1.5, 0]}
                minDistance={4}
                maxDistance={10}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.9}
                autoRotate={clipBaseName(current) === 'Idle'}
                autoRotateSpeed={0.6}
              />
            </Canvas>
          </CanvasErrorBoundary>
        ) : (
          <Fallback />
        )}
      </div>

      {/* Move controls */}
      <div className="relative z-10 border-t border-orixis-text/10 bg-orixis-bg/50 p-3 backdrop-blur sm:p-4">
        {orderedClips.length === 0 ? (
          <div className="flex items-center justify-center gap-2 py-2 text-sm text-orixis-text-muted">
            <Play size={16} className="animate-pulse" /> Loading moves…
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {orderedClips.map((clip) => {
              const base = clipBaseName(clip);
              const meta = MOVES[base] ?? { label: base, Icon: Play };
              const active = current === clip;
              return (
                <button
                  key={clip}
                  onClick={() => setCurrent(clip)}
                  aria-pressed={active}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:text-sm ${
                    active
                      ? 'bg-gradient-primary text-white shadow-lg shadow-orixis-teal/30'
                      : 'bg-orixis-text/10 text-orixis-text hover:bg-orixis-teal/20 hover:text-orixis-teal'
                  }`}
                >
                  <meta.Icon size={15} />
                  {meta.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RobotShowcase;
