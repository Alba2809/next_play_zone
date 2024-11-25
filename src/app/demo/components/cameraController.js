import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function CameraController({ position, target }) {
  const { camera } = useThree();
  const cameraRef = useRef(null);

  const cameraAnimate = () => {
    if (cameraRef.current) {
      gsap.to(camera.position, {
        x: position.x,
        y: position.y,
        z: position.z,
        duration: 2,
        onUpdate: () => camera.lookAt(target.x, target.y, target.z),
      });
    }
  };

  useEffect(() => {
    cameraAnimate();
  }, [target, position]);

  return (
    <OrbitControls ref={cameraRef} enableZoom enableRotate target={[0, 0, 0]} />
  );
}
