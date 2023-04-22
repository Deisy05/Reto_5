import { useRef } from "react";
import React from "react";

export default function Wall(props) {

  const imagesWallRef = useRef();

  return (
      <group ref={imagesWallRef} {...props}  dispose={null}>
          <mesh  
              receiveShadow= {true}
              position-y={0.5}
              position-x={4}
              position-z={-0.06} 
              rotation-x={- Math.PI * 0.5}>
              <boxGeometry args={[0.25,8.14,4]} />
              <meshStandardMaterial color="cyan" />
          </mesh>
      </group>
  )
}


