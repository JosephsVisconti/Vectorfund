'use client'

import { useState, useEffect } from 'react'

/**
 * Returns true when the user's OS has "prefer reduced motion" enabled.
 * Reactively updates if the user changes the setting at runtime.
 */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}
