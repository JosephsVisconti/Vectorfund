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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const backLight = new THREE.DirectionalLight(0x4444ff, 0.3)
    backLight.position.set(-5, -5, -5)
    scene.add(backLight)

    // Create sophisticated 3D vector arrow
    const arrowGroup = new THREE.Group()

    // Main arrow shaft - as a cylinder
    const shaftGeometry = new THREE.CylinderGeometry(0.04, 0.04, 2.5, 16)
    const shaftMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0x333333
    })
    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial)
    shaft.rotation.z = Math.PI / 2
    shaft.position.x = 0.2
    arrowGroup.add(shaft)

    // Arrow head - cone
    const headGeometry = new THREE.ConeGeometry(0.15, 0.5, 16)
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x444444
    })
    const head = new THREE.Mesh(headGeometry, headMaterial)
    head.rotation.z = -Math.PI / 2
    head.position.x = 1.7
    arrowGroup.add(head)

    // Tail accent - smaller cone
    const tailGeometry = new THREE.ConeGeometry(0.1, 0.3, 16)
    const tail = new THREE.Mesh(tailGeometry, shaftMaterial)
    tail.rotation.z = Math.PI / 2
    tail.position.x = -1.35
    arrowGroup.add(tail)

    // Add subtle wireframe overlay
    const wireframeGeometry = new THREE.EdgesGeometry(shaftGeometry)
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x888888,
      transparent: true,
      opacity: 0.3
    })
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
    wireframe.rotation.z = Math.PI / 2
    wireframe.position.x = 0.2
    arrowGroup.add(wireframe)

    scene.add(arrowGroup)

    camera.position.z = 4

    // Smooth animation
    let frame = 0
    function animate() {
      requestAnimationFrame(animate)
      frame += 0.004

      // Smooth, elegant rotation
      arrowGroup.rotation.y = Math.sin(frame) * 0.4 + frame * 0.1
      arrowGroup.rotation.x = Math.cos(frame * 0.6) * 0.2
      arrowGroup.rotation.z = Math.sin(frame * 0.4) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      shaftGeometry.dispose()
      headGeometry.dispose()
      tailGeometry.dispose()
      wireframeGeometry.dispose()
      shaftMaterial.dispose()
      headMaterial.dispose()
      wireframeMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className="vector-logo-3d" />
}

export default VectorLogo
