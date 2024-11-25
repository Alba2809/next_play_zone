"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Lights from "./components/lights";
import CameraController from "./components/cameraController";

const RoomModel = () => {
  const model = useGLTF("/models/room.glb");

  return <primitive object={model.scene} scale={1} />;
};

export default function Demo() {
  const [position, setPosition] = useState({ x: -15, y: 7, z: 20 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });

  const handleClick = () => {
    setPosition({ x: -10, y: 7, z: 20 });
    setTarget({ x: 0, y: 0, z: 0 });
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Canvas
        className="size-full"
        camera={{ position: [position.x, position.y, position.z]}}
      >
        <CameraController position={position} target={target} />
        <Lights />
        <color attach="background" args={["#0e1017"]} />
        <RoomModel />
      </Canvas>
      <section className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <button className="bg-white rounded-md px-2 py-1 text-black" onClick={handleClick}>Change Camera Position</button>
      </section>
    </div>
  );
}
