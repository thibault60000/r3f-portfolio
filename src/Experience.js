import {
  PresentationControls,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { useControls } from "leva";
import Macbook from "./Macbook";
import Iphone from "./Iphone";

export default function Experience() {
  const { background, mobile } = useControls(
    "Scene",
    {
      background: "#695B5B",
      mobile: false,
    },
    { collapsed: true }
  );

  return (
    <>
      <Environment preset='city' />

      <color args={[background]} attach='background' />

      {/* Use 'global' to drag'n' drop from everywhere */}
      <PresentationControls
        global
        rotation={[0.15, 0.1, 0]}
        polar={[-0.4, 0.2]} // Vertical limit
        azimuth={[-1, 0.7]} // Horizontal limit
        config={{ mass: 1.4, tension: 300 }}
        snap={{ mass: 2, tension: 250 }}
      >
        {mobile ? <Iphone /> : <Macbook />}
      </PresentationControls>

      <ContactShadows position-y={-1.5} blur={2.4} scale={4} opacity={0.4} />
    </>
  );
}
