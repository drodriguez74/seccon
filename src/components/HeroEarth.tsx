'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroEarth() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.z = 2.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Intense, cinematic lighting
    scene.add(new THREE.AmbientLight(0x0a0a1a, 0.5)) // Darker ambient for deep space contrast
    
    // Sun positioned to strike the top-right horizon edge vividly
    const sunLight = new THREE.DirectionalLight(0xffffff, 3.0) 
    sunLight.position.set(4, 1.5, -2)
    scene.add(sunLight)

    const loader = new THREE.TextureLoader()

    // Larger Earth Geometry
    const earthRadius = 1.4
    const earthGeo = new THREE.SphereGeometry(earthRadius, 64, 64)
    const earthMat = new THREE.MeshStandardMaterial({
      map: loader.load('/textures/earth.jpg'),
      roughness: 0.6,
      metalness: 0.1,
    })
    
    const earth = new THREE.Mesh(earthGeo, earthMat)
    
    // Adjust positioning to hug the bottom-left corner like the reference photo
    earth.position.set(-1.1, -1.2, 0)
    // Dynamic cinematic angle rotation
    earth.rotation.x = 0.4
    earth.rotation.z = -0.2
    scene.add(earth)

    // Atmospheric Glow via Custom Shader (Matches the vibrant blue flare)
    const atmosphereGeo = new THREE.SphereGeometry(earthRadius * 1.04, 64, 64)
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          // Intensity calculations based on view angle
          float intensity = pow(0.7 - dot(normal, viewDir), 2.5);
          // Bright vivid blue color matching the client image
          vec3 atmosphereColor = vec3(0.1, 0.45, 1.0) * intensity;
          gl_FragColor = vec4(atmosphereColor, intensity * 0.8);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    })

    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat)
    atmosphere.position.copy(earth.position) // Keep it locked onto the earth's position
    scene.add(atmosphere)

    // Dense, crisp starfield
    const starGeo = new THREE.BufferGeometry()
    const starCount = 1200
    const positions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 40
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMat = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 0.03, 
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9 
    })
    scene.add(new THREE.Points(starGeo, starMat))

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      // Slow, subtle rotation on its custom tilted axis
      earth.rotation.y += 0.0004
      renderer.render(scene, camera)
    }
    animate()

    const observer = new ResizeObserver(() => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    })
    observer.observe(mount)

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}