// src/Components/ModelCanvas/modelCanvas.jsx
import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
  Center,
} from "@react-three/drei";

// Component để load và hiển thị mô hình
function Model({ modelUrl }) {
  const { scene } = useGLTF(modelUrl);

  return (
    <Center>
      <primitive object={scene} dispose={null} />
    </Center>
  );
}

// Component Canvas chính
export default function ModelCanvas({ modelUrl }) {
  const canvasKey = useMemo(() => modelUrl, [modelUrl]); // ép Canvas reload khi đổi model

  return (
      <Canvas key={canvasKey} camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* Ánh sáng */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        {/* Load mô hình */}
        <Suspense fallback={null}>
          <Model modelUrl={modelUrl} />
          <Environment preset="sunset" />
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.3}
            scale={10}
            blur={1.5}
            far={10}
          />
        </Suspense>

        {/* Điều khiển camera */}
        <OrbitControls enableZoom />
      </Canvas>
  );
}
