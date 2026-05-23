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

    // Lights — sun from upper-right
    scene.add(new THREE.AmbientLight(0x222233, 1))
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.4)
    sunLight.position.set(5, 3, 5)
    scene.add(sunLight)

    // Earth sphere
    const loader = new THREE.TextureLoader()
    const earthGeo = new THREE.SphereGeometry(1, 64, 64)
    const earthMat = new THREE.MeshPhongMaterial({
      map: loader.load('/textures/earth.jpg'),
      specularMap: loader.load('/textures/earth_specular.jpg'),
      specular: new THREE.Color(0x333344),
      shininess: 12,
    })
    const earth = new THREE.Mesh(earthGeo, earthMat)
    earth.rotation.x = 0.15
    scene.add(earth)

    // Atmosphere — inner
    const atmGeo = new THREE.SphereGeometry(1.06, 64, 64)
    const atmMat = new THREE.MeshPhongMaterial({
      color: 0x4a9ecc,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.18,
    })
    scene.add(new THREE.Mesh(atmGeo, atmMat))

    // Atmosphere — outer glow
    const glowGeo = new THREE.SphereGeometry(1.18, 64, 64)
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x1a4a7a,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.07,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    scene.add(new THREE.Mesh(glowGeo, glowMat))

    // Star field
    const starGeo = new THREE.BufferGeometry()
    const starCount = 1500
    const positions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.07, sizeAttenuation: true })))

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      earth.rotation.y += 0.0008
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
