import { Float, useGLTF, Html } from "@react-three/drei";
import { useControls } from "leva";
import Title from "./Title.js";

export default function Macbook({ url }) {
  const macbook = useGLTF("./macbook.gltf");

  const { width, height, intensity, color, rotation, position } = useControls(
    "ScreenLight",
    {
      width: 2.5,
      height: 1.65,
      intensity: 60,
      color: "blue",
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
      <primitive position-y={-1.3} object={macbook.scene}>
        <Html
          transform
          wrapperClass='htmlScreen'
          distanceFactor={1.2}
          position={[0, 1.56, -1.4]}
          rotation-x={-0.256}
        >
          {url && <iframe src={url} />}
        </Html>
      </primitive>
      <Title />
    </Float>
  );
}
