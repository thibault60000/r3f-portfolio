import {
  PresentationControls,
  ContactShadows,
  Environment,
  Html,
} from "@react-three/drei";
import { useControls } from "leva";
import Macbook from "./Macbook";
import Iphone from "./Iphone";

import { useState } from "react";

export default function Experience() {
  const { background, mobile } = useControls(
    "Scene",
    {
      background: "#695B5B",
      mobile: false,
    },
    { collapsed: true }
  );

  const [url, setUrl] = useState(
    "https://portfolio-content-qneo4dzfd-thibault60000.vercel.app/"
  );

  function reset() {
    console.log("reset");
    setUrl(null);
  }

  function home() {
    reset();
    setTimeout(() => {
      setUrl("https://portfolio-content-qneo4dzfd-thibault60000.vercel.app/");
    }, 500);
  }

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
        {mobile ? <Iphone /> : <Macbook url={url} />}
      </PresentationControls>

      <Html
        transform
        distanceFactor={1}
        rotation-x={-0.8}
        position={[2, -3, -1]}
        wrapperClass='htmlButton'
      >
        <button onClick={home}>HomePage</button>
      </Html>

      <Html
        transform
        distanceFactor={1}
        rotation-x={-0.8}
        position={[5, -3, -1]}
        wrapperClass='htmlButton'
      >
        <button onClick={reset}>Off</button>
      </Html>

      <ContactShadows position-y={-1.5} blur={2.4} scale={4} opacity={0.4} />
    </>
  );
}
