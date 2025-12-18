import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function TimelineLine() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 100 / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })

    const height = containerRef.current.offsetHeight
    renderer.setSize(100, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x00ff88, 1, 100)
    pointLight.position.set(0, 0, 5)
    scene.add(pointLight)

    // Create flowing line geometry
    const points = []
    const segments = 100

    for (let i = 0; i <= segments; i++) {
      const y = (i / segments) * 10 - 5
      const x = Math.sin(i * 0.2) * 0.3
      const z = Math.cos(i * 0.15) * 0.2
      points.push(new THREE.Vector3(x, y, z))
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points)

    // Create gradient material effect with multiple line segments
    const material = new THREE.LineBasicMaterial({
      color: 0x00ff88,
      linewidth: 3,
      transparent: true,
      opacity: 0.8
    })

    const line = new THREE.Line(geometry, material)
    scene.add(line)

    // Add glow effect with particles
    const particleCount = 20
    const particles = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.5
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ff88,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })

    const particleSystem = new THREE.Points(particles, particleMaterial)
    scene.add(particleSystem)

    camera.position.z = 8

    // Animation
    let frame = 0
    function animate() {
      requestAnimationFrame(animate)
      frame += 0.01

      // Rotate line slightly for dynamic effect
      line.rotation.z = Math.sin(frame) * 0.1

      // Animate particles flowing upward
      const positions = particleSystem.geometry.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += 0.02
        if (positions[i * 3 + 1] > 5) {
          positions[i * 3 + 1] = -5
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true

      // Pulse the point light
      pointLight.intensity = 0.8 + Math.sin(frame * 2) * 0.3

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const newHeight = containerRef.current?.offsetHeight || height
      renderer.setSize(100, newHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      particles.dispose()
      particleMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className="timeline-3d-line" />
}

export default TimelineLine
