import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { ProductColor, ProductSize } from "../types/product";
import * as THREE from "three";

interface ModelProps {
  color: string;
  scale: number;
}

const Model: React.FC<ModelProps> = ({ color, scale }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate the cube
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

interface ProductModelProps {
  modelPath: string;
  selectedColor: ProductColor;
  selectedSize: ProductSize;
}

const ProductModel: React.FC<ProductModelProps> = ({
  selectedColor,
  selectedSize,
}) => {
  const getScaleFactor = (size: string): number => {
    switch (size) {
      case "small":
        return 0.8;
      case "medium":
        return 1;
      case "large":
        return 1.2;
      default:
        return 1;
    }
  };

  const scaleFactor = getScaleFactor(selectedSize.value);

  return (
    <div className="h-[500px] w-full bg-gray-50 rounded-lg">
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.8}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
        />
        <Model color={selectedColor.value} scale={scaleFactor} />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.4}
          scale={5}
          blur={2}
          far={4}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ProductModel;
