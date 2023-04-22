import React, { useRef, useState } from 'react';
import * as THREE from 'three';

import texture1 from '../static/bowser.png'
import texture2 from '../static/everybody.jpg';
import texture3 from '../static/luigi.jpg';
import texture4 from '../static/mario.jpg';
import texture5 from '../static/princess.jpg';

export default function Wall() {
  const meshRef = useRef();
  const [currentTextureIndex, setCurrentTextureIndex] = useState(0);

  const materials = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texture1) }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texture2) }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texture3) }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texture4) }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texture5) }),
  ];

  const handleClick = () => {
    const nextTextureIndex = (currentTextureIndex + 1) % materials.length;
    setCurrentTextureIndex(nextTextureIndex);
    meshRef.current.material = materials[nextTextureIndex];
  };

  return (
    <group onPointerOut={handleClick}>
      <mesh
        ref={meshRef}
        receiveShadow
        position-y={0.5}
        position-x={4}
        position-z={-0.06} 
        rotation-z={- Math.PI * 0.5}
        rotation-x={- Math.PI * 0.5}
        name="wall1"
      >
        <boxGeometry args={[8.14,0.25,4]} />
        <meshStandardMaterial color="cyan" map={materials[currentTextureIndex].map} />
      </mesh>
    </group>
  );
}



