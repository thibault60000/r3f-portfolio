import { Text } from "@react-three/drei";
import { useControls } from "leva";

export default function Title() {
  const { fontSize, color, position, rotationY, text } = useControls(
    "Text",
    {
      fontSize: 0.6,
      color: "#3b82f6",
      position: [1.8, 0.75, 0.75],
      rotationY: -1.2,
      text: "Thibault Jeanpierre",
    },
    { collapsed: true }
  );
  return (
    <Text
      font='./bangers-v20-latin-regular.woff'
      fontSize={fontSize}
      color={color}
      position={position}
      rotation-y={rotationY}
      maxWidth={1.5}
      textAlign='center'
    >
      {text}
    </Text>
  );
}
