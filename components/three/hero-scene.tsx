"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";

// ===== Neural Network Particle Cloud =====
function NeuralNetworkCloud() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();

  const accentColor = useMemo(() => {
    return theme === "light" ? "#6d3fff" : "#7c5cff";
  }, [theme]);

  const opacity = theme === "light" ? 0.4 : 0.7;

  // Generate particle positions in a sphere
  const { positions, linePositions } = useMemo(() => {
    const count = 400;
    const pos = new Float32Array(count * 3);
    const radius = 3;

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    // Find nearest neighbor connections
    const lines: number[] = [];
    const connectionDistance = 1.2;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionDistance) {
          lines.push(
            pos[i * 3],
            pos[i * 3 + 1],
            pos[i * 3 + 2],
            pos[j * 3],
            pos[j * 3 + 1],
            pos[j * 3 + 2]
          );
        }
      }
    }

    return {
      positions: pos,
      linePositions: new Float32Array(lines),
    };
  }, []);

  // Track mouse for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation loop
  useFrame((_, delta) => {
    if (groupRef.current) {
      // Slow continuous rotation
      groupRef.current.rotation.y += delta * 0.05;

      // Mouse parallax (max ±0.1 rad)
      const targetX = mouse.current.y * 0.1;
      const targetY = mouse.current.x * 0.1;
      groupRef.current.rotation.x +=
        (targetX - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.z +=
        (targetY - groupRef.current.rotation.z) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={accentColor}
          size={0.04}
          transparent
          opacity={opacity}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={accentColor}
          transparent
          opacity={opacity * 0.3}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

// ===== Main Hero Scene Component =====
export default function HeroScene() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Disable on mobile or reduced motion
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || prefersReducedMotion) {
      setVisible(false);
    }

    const handleResize = () => {
      setVisible(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    >
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <NeuralNetworkCloud />
      </Canvas>
    </div>
  );
}
