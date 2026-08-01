import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeParticlesProps {
  className?: string;
  particleCount?: number;
}

export const ThreeParticles: React.FC<ThreeParticlesProps> = ({
  className = '',
  particleCount = 140,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Geometry Particles & Floating Cubes
    const group = new THREE.Group();
    scene.add(group);

    // Create particles
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#326080');
    const color2 = new THREE.Color('#B5D2E6');
    const color3 = new THREE.Color('#805232');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 800;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 500;

      const rand = Math.random();
      const col = rand > 0.7 ? color3 : rand > 0.3 ? color2 : color1;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });

    const particles = new THREE.Points(geometry, material);
    group.add(particles);

    // Add 12 Floating Wireframe Cubes for Enterprise Tech Aesthetic
    const cubes: THREE.Mesh[] = [];
    const cubeGeo = new THREE.BoxGeometry(22, 22, 22);
    for (let i = 0; i < 12; i++) {
      const cubeMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x326080 : 0x805232,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.set(
        (Math.random() - 0.5) * 700,
        (Math.random() - 0.5) * 500,
        (Math.random() - 0.5) * 350
      );
      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      cubes.push(cube);
      group.add(cube);
    }

    // Animation
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      group.rotation.y = elapsedTime * 0.05;
      group.rotation.x = Math.sin(elapsedTime * 0.03) * 0.1;

      cubes.forEach((cube, idx) => {
        cube.rotation.x += 0.005 * (idx % 2 === 0 ? 1 : -1);
        cube.rotation.y += 0.008;
        cube.position.y += Math.sin(elapsedTime + idx) * 0.3;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [particleCount]);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
};
