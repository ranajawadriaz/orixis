import { useEffect, useMemo } from 'react';
import { useAnimations, useFBX } from '@react-three/drei';
import * as THREE from 'three';

export const ROBOT_FBX = '/robot/RobotAnimated.fbx';

/** Base clip names (suffix after "Robot_") that should play once then return to Idle. */
const ONE_SHOT = new Set(['Jump', 'Punch', 'Yes', 'No', 'ThumbsUp', 'WalkJump', 'Death']);

export const clipBaseName = (full: string) => full.split('_').pop() ?? full;

interface RobotModelProps {
  /** Full clip name to play (e.g. "RobotArmature|Robot_Wave"). */
  clip: string;
  onReady: (clips: string[]) => void;
  onFinished: () => void;
}

const RobotModel = ({ clip, onReady, onFinished }: RobotModelProps) => {
  const fbx = useFBX(ROBOT_FBX);

  // Normalise scale + sit the robot's feet on the ground. Guarded so a cached
  // FBX instance (StrictMode / remount) is never scaled twice.
  const model = useMemo(() => {
    if (!fbx.userData.__normalized) {
      fbx.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(fbx);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);
      const s = 3.4 / (size.y || 1);
      fbx.scale.setScalar(s);
      fbx.position.set(-center.x * s, -box.min.y * s, -center.z * s);
      fbx.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.isMesh) {
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          mesh.frustumCulled = false;
        }
      });
      fbx.userData.__normalized = true;
    }
    return fbx;
  }, [fbx]);

  const { actions, names, mixer } = useAnimations(fbx.animations, model);

  // Report the available clips to the parent so it can build controls.
  useEffect(() => {
    onReady(names);
  }, [names, onReady]);

  // Notify when a one-shot clip finishes so the parent can return to Idle.
  useEffect(() => {
    const handler = () => onFinished();
    mixer.addEventListener('finished', handler);
    return () => mixer.removeEventListener('finished', handler);
  }, [mixer, onFinished]);

  // Crossfade to the selected clip.
  useEffect(() => {
    const action = actions[clip];
    if (!action) return;

    const oneShot = ONE_SHOT.has(clipBaseName(clip));
    action.reset();
    action.setLoop(oneShot ? THREE.LoopOnce : THREE.LoopRepeat, Infinity);
    action.clampWhenFinished = oneShot;
    action.fadeIn(0.3).play();

    return () => {
      action.fadeOut(0.3);
    };
  }, [clip, actions]);

  return <primitive object={model} />;
};

export default RobotModel;
