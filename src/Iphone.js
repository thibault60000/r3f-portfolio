import { Float, useGLTF, Html } from "@react-three/drei";
import { useControls } from "leva";
import Title from "./Title.js";

export default function Iphone() {
  const iphone = useGLTF("./iphone.gltf");

  const { width, height, intensity, color, rotation, position } = useControls(
    "ScreenLight",
    {
      width: 2.5,
      height: 1.65,
      intensity: 60,
      color: "#3b82f6",
      rotation: [-0.1, Math.PI, 0],
      position: [0, 0.55, -1.15],
    },
    { collapsed: true }
  );
  return (
    <Float rotationIntensity={0.35}>
      <rectAreaLight
        width={width}
        height={height}
        intensity={intensity}
        color={color}
        rotation={rotation}
        position={position}
      />
      <primitive position-y={-1.3} object={iphone.scene}></primitive>
      <Title />
    </Float>
  );
}
