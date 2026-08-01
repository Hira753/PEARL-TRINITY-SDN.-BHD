import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeGlobeProps {
  className?: string;
  interactive?: boolean;
}

export const ThreeGlobe: React.FC<ThreeGlobeProps> = ({ className = '', interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Core Sphere Wireframe
    const sphereRadius = 75;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 36, 36);
    
    // Custom Point Cloud for 3D Globe
    const positions: number[] = [];
    const colors: number[] = [];
    const colorPrimary = new THREE.Color(0x326080); // #326080
    const colorLightBlue = new THREE.Color(0xB5D2E6); // #B5D2E6
    const colorAccent = new THREE.Color(0x805232); // #805232

    // Create dot matrix sphere points
    const count = 2200;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);

      positions.push(x, y, z);

      // Randomize color accent
      const mix = Math.random();
      const pColor = mix > 0.8 ? colorAccent : mix > 0.3 ? colorLightBlue : colorPrimary;
      colors.push(pColor.r, pColor.g, pColor.b);
    }

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    pointGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const pointMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const pointsMesh = new THREE.Points(pointGeo, pointMat);
    globeGroup.add(pointsMesh);

    // Outer Atmosphere Glow Ring
    const atmosphereGeo = new THREE.SphereGeometry(sphereRadius * 1.08, 32, 32);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x326080,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    globeGroup.add(atmosphereMesh);

    // Outer Floating Particles Cyber Ring
    const ringCount = 180;
    const ringPos: number[] = [];
    const ringGeo = new THREE.BufferGeometry();
    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * Math.PI * 2;
      const r = sphereRadius * 1.35;
      ringPos.push(Math.cos(angle) * r, Math.sin(angle) * (r * 0.35), (Math.random() - 0.5) * 20);
    }
    ringGeo.setAttribute('position', new THREE.Float32BufferAttribute(ringPos, 3));
    const ringMat = new THREE.PointsMaterial({
      size: 1.8,
      color: 0xB5D2E6,
      transparent: true,
      opacity: 0.6,
    });
    const ringMesh = new THREE.Points(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 6;
    globeGroup.add(ringMesh);

    // Animated Connection Arcs between Global Tech Hubs (Kuala Lumpur, Singapore, London, Tokyo, SF)
    const hubs = [
      { name: 'Kuala Lumpur', lat: 3.139, lon: 101.686 },
      { name: 'Singapore', lat: 1.352, lon: 103.82 },
      { name: 'Tokyo', lat: 35.676, lon: 139.65 },
      { name: 'London', lat: 51.507, lon: -0.127 },
      { name: 'San Francisco', lat: 37.774, lon: -122.419 },
      { name: 'Dubai', lat: 25.204, lon: 55.27 },
    ];

    const hubToVector = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(r * Math.sin(phi) * Math.cos(theta)),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    };

    // Draw Arc curves
    hubs.forEach((h1, idx) => {
      hubs.slice(idx + 1).forEach((h2) => {
        const v1 = hubToVector(h1.lat, h1.lon, sphereRadius);
        const v2 = hubToVector(h2.lat, h2.lon, sphereRadius);
        const distance = v1.distanceTo(v2);

        if (distance < 180) {
          const mid = v1.clone().add(v2).multiplyScalar(0.5);
          const midLength = mid.length();
          mid.normalize().multiplyScalar(sphereRadius + distance * 0.25);

          const curve = new THREE.QuadraticBezierCurve3(v1, mid, v2);
          const points = curve.getPoints(30);
          const lineGeo = new THREE.BufferGeometry().setFromPoints(points);

          const lineMat = new THREE.LineBasicMaterial({
            color: idx % 2 === 0 ? 0xB5D2E6 : 0x805232,
            transparent: true,
            opacity: 0.35,
          });

          const line = new THREE.Line(lineGeo, lineMat);
          globeGroup.add(line);
        }
      });
    });

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth rotation
      globeGroup.rotation.y += 0.003;
      ringMesh.rotation.z -= 0.002;

      // Mouse Parallax
      targetX += (mouseX * 0.4 - targetX) * 0.05;
      targetY += (mouseY * 0.4 - targetY) * 0.05;
      globeGroup.rotation.x = targetY;
      globeGroup.rotation.z = targetX * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
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
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[380px] flex items-center justify-center cursor-grab active:cursor-grabbing ${className}`}
    />
  );
};
