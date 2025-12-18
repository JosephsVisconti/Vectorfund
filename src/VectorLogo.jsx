import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function VectorLogo() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })

    renderer.setSize(400, 400)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create vector arrow geometry
    const points = []

    // Arrow shaft
    points.push(new THREE.Vector3(-1.5, 0, 0))
    points.push(new THREE.Vector3(1.2, 0, 0))

    // Arrow head lines
    const arrowHeadPoints = [
      new THREE.Vector3(0.7, 0.4, 0),
      new THREE.Vector3(1.2, 0, 0),
      new THREE.Vector3(0.7, -0.4, 0),
    ]

    const shaftGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const arrowGeometry = new THREE.BufferGeometry().setFromPoints(arrowHeadPoints)

    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 2
    })

    const shaft = new THREE.Line(shaftGeometry, material)
    const arrowHead = new THREE.Line(arrowGeometry, material)

    const arrow = new THREE.Group()
    arrow.add(shaft)
    arrow.add(arrowHead)

    scene.add(arrow)

    camera.position.z = 4

    // Animation
    let frame = 0
    function animate() {
      requestAnimationFrame(animate)
      frame += 0.005

      // Subtle rotation
      arrow.rotation.y = Math.sin(frame) * 0.3
      arrow.rotation.x = Math.cos(frame * 0.7) * 0.15

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="vector-logo-3d" />
}

export default VectorLogo
