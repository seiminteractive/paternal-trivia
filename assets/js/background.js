/**
 * Fondo animado con partículas y efecto de profundidad (bokeh).
 * Las partículas lejanas se ven borrosas, las cercanas nítidas.
 * Usa la paleta naranja de Paternal Motor.
 */
(function() {
  'use strict';

  const vertexShader = `
    attribute float size;
    attribute float depth;
    attribute float speed;
    attribute float seed;
    varying float vDepth;
    varying float vSize;
    varying float vBlur;
    uniform float uTime;
    void main() {
      vDepth = depth;
      vSize = size;
      vBlur = depth;
      vec3 pos = position;
      pos.y += sin(uTime * speed + seed) * 0.02;
      pos.x += cos(uTime * speed * 0.7 + seed * 1.3) * 0.02;
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    varying float vDepth;
    varying float vSize;
    varying float vBlur;
    uniform vec3 uColorNear;
    uniform vec3 uColorFar;
    void main() {
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center) * 2.0;
      float alpha;
      if (vBlur > 0.5) {
        alpha = 1.0 - smoothstep(0.05, 0.95, dist);
        alpha *= 0.25 + vDepth * 0.35;
      } else {
        alpha = 1.0 - smoothstep(0.7, 1.0, dist);
        alpha *= 0.8 + (1.0 - vDepth) * 0.2;
      }
      vec3 color = mix(uColorFar, uColorNear, 1.0 - vDepth);
      gl_FragColor = vec4(color, alpha);
    }
  `;

  function initBackground(container) {
    if (!window.THREE) return null;

    const THREE = window.THREE;
    const w = container.offsetWidth;
    const h = container.offsetHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const depths = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);
    const seeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2 - 1;

      const depth = Math.random();
      depths[i] = depth;
      sizes[i] = depth > 0.6 ? 8 + Math.random() * 25 : 2 + Math.random() * 6;
      speeds[i] = 0.2 + Math.random() * 0.8;
      seeds[i] = Math.random() * 100;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('depth', new THREE.BufferAttribute(depths, 1));
    geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
    geometry.setAttribute('seed', new THREE.BufferAttribute(seeds, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColorNear: { value: new THREE.Color(0xf48c06) },
        uColorFar: { value: new THREE.Color(0xe85d04) }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let time = 0;
    let animId = null;
    function animate() {
      time += 0.016;
      material.uniforms.uTime.value = time;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    }
    animate();

    function resize() {
      const nw = container.offsetWidth;
      const nh = container.offsetHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    }
    window.addEventListener('resize', resize);

    return {
      destroy: function() {
        window.removeEventListener('resize', resize);
        if (animId) cancelAnimationFrame(animId);
        geometry.dispose();
        material.dispose();
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }

  document.addEventListener('DOMContentLoaded', function() {
    requestAnimationFrame(function() {
      const el = document.getElementById('bg');
      if (el && el.offsetWidth > 0 && el.offsetHeight > 0) {
        window.backgroundEffect = initBackground(el);
      }
    });
  });
})();
