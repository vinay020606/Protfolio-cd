'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const GeometricCharacter = () => {
    const group = useRef<THREE.Group>(null);
    const headGroup = useRef<THREE.Group>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useFrame((state) => {
        if (!group.current || !headGroup.current) return;

        // Very subtle movement
        const targetRotY = (state.mouse.x * Math.PI) / 12;
        const targetRotX = (state.mouse.y * Math.PI) / 12;

        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY * 0.3, 0.05);
        headGroup.current.rotation.y = THREE.MathUtils.lerp(headGroup.current.rotation.y, targetRotY, 0.05);
        headGroup.current.rotation.x = THREE.MathUtils.lerp(headGroup.current.rotation.x, -targetRotX, 0.05);
    });

    // Clean, professional material
    const materialProps = {
        roughness: 0.4,
        metalness: 0.6,
        color: isDark ? "#cbd5e1" : "#94a3b8", // Slate-300 dark, Slate-400 light
    };

    const accentMaterial = {
        roughness: 0.2,
        metalness: 0.8,
        color: isDark ? "#64748b" : "#475569", // Slate-500 dark, Slate-600 light
    };

    return (
        <group ref={group}>
            {/* Torso - Slimmer */}
            <mesh position={[0, -0.8, 0]}>
                <capsuleGeometry args={[0.45, 0.9, 4, 16]} />
                <meshStandardMaterial {...accentMaterial} />
            </mesh>

            {/* Shoulders - Smaller */}
            <mesh position={[0, -0.3, 0]}>
                <boxGeometry args={[1.3, 0.25, 0.6]} />
                <meshStandardMaterial {...accentMaterial} />
            </mesh>

            {/* Head Group - Smaller */}
            <group ref={headGroup} position={[0, 0.45, 0]}>
                {/* Head */}
                <mesh>
                    <boxGeometry args={[0.55, 0.65, 0.6]} />
                    <meshStandardMaterial {...materialProps} />
                </mesh>

                {/* Visor */}
                <mesh position={[0, 0.05, 0.31]}>
                    <planeGeometry args={[0.4, 0.08]} />
                    <meshBasicMaterial color="#0ea5e9" toneMapped={false} />
                </mesh>
                {/* Point light for visor glow */}
                <pointLight position={[0, 0.1, 0.4]} distance={0.8} intensity={1.5} color="#0ea5e9" />
            </group>
        </group>
    );
};

const Scene = () => {
    return (
        <>
            <group position={[0, -0.2, 0]}>
                <Float
                    speed={2}
                    rotationIntensity={0.2}
                    floatIntensity={0.4}
                >
                    <GeometricCharacter />
                </Float>
                <ContactShadows position={[0, -2, 0]} opacity={0.3} scale={8} blur={2} far={4} />
            </group>

            <Environment preset="city" />
        </>
    );
};

export default function Avatar3D() {
    return (
        <div className="w-full h-full min-h-[300px] flex items-center justify-center relative z-10 transition-opacity duration-500">
            <Canvas className="w-full h-full bg-transparent">
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={35} />
                <ambientLight intensity={0.6} />
                <spotLight position={[5, 10, 5]} angle={0.2} penumbra={1} intensity={1} />

                <Scene />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                />
            </Canvas>
        </div>
    );
}
