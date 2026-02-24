'use client'

import { useState, useEffect, useRef } from 'react'
import LogoAnimation from './LogoAnimation'
import useReducedMotion from './useReducedMotion'

const slides = [
  {
    type: 'video',
    src: '/videos/city.mp4',
    poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    label: 'SCALE',
    posterStyle: 'sunrise',
    duration: 8000,
  },
  {
    type: 'video',
    src: '/videos/code.mp4',
    poster: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920&q=80',
    label: 'CODE',
    duration: 4000,
  },
  {
    type: 'logo',
    label: 'VECTOR',
    duration: 5000,
  },
  {
    type: 'video',
    src: '/videos/capital.mp4',
    poster: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&q=80',
    label: 'CAPITAL',
    animatePoster: true,
    duration: 4000,
  },
  {
    type: 'video',
    src: '/videos/ai.mp4',
    poster: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=80',
    label: 'AI',
    duration: 4000,
  },
]

/**
 * One video slide.
 * - Shows an animated CSS poster immediately (works without any video file)
 * - Loads + plays the video when this slide is active; pauses + resets on deactivation
 * - Pauses automatically when the hero is scrolled off-screen (IntersectionObserver)
 * - When reducedMotion is true, video is never started; CSS animations handled in CSS
 */
function VideoSlide({ slide, isActive, reducedMotion }) {
  const videoRef = useRef(null)

  // posterKey increments each time this slide becomes active,
  // which causes React to remount the poster div → restarts its CSS animation from frame 0
  const [posterKey, setPosterKey] = useState(0)
  useEffect(() => {
    if (isActive) setPosterKey(k => k + 1)
  }, [isActive])

  // Pause video when the hero section leaves the viewport
  useEffect(() => {
    const video = videoRef.current
    if (!video || reducedMotion) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isActive) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.1 }
    )
    io.observe(video)
    return () => io.disconnect()
  }, [isActive, reducedMotion])

  // Play/pause as active slide changes
  useEffect(() => {
    const video = videoRef.current
    if (!video || reducedMotion) return

    if (isActive) {
      video.play().catch(() => {})
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [isActive, reducedMotion])

  const posterCls = [
    'hero-poster-anim',
    slide.posterStyle ? `hero-poster-anim--${slide.posterStyle}` : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      {/* Animated photo — always present, provides fallback when no video file exists */}
      <div
        key={posterKey}
        className={posterCls}
        style={{ backgroundImage: `url(${slide.poster})` }}
        aria-hidden="true"
      />

      {/* Video layer — sits on top once it buffers and plays */}
      {!reducedMotion && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload={isActive ? 'auto' : 'none'}
          className={`hero-video ${isActive ? 'hero-video-active' : ''}`}
          aria-hidden="true"
        >
          <source src={slide.src} type="video/mp4" />
        </video>
      )}
    </>
  )
}

export default function HeroBackground() {
  const [current, setCurrent] = useState(0)
  const reducedMotion = useReducedMotion()

  // Per-slide durations via setTimeout instead of a fixed setInterval
  useEffect(() => {
    const t = setTimeout(
      () => setCurrent(prev => (prev + 1) % slides.length),
      slides[current].duration
    )
    return () => clearTimeout(t)
  }, [current])

  return (
    <div className="hero-bg" role="presentation" aria-hidden="true">
      {slides.map((slide, i) => {
        const isActive = i === current

        if (slide.type === 'logo') {
          return (
            <div
              key={i}
              className={`hero-slide hero-slide-logo ${isActive ? 'hero-slide-active' : ''}`}
            >
              {isActive && !reducedMotion && <LogoAnimation />}
            </div>
          )
        }

        return (
          <div
            key={i}
            className={`hero-slide ${isActive ? 'hero-slide-active' : ''}`}
          >
            <VideoSlide
              slide={slide}
              isActive={isActive}
              reducedMotion={reducedMotion}
            />
          </div>
        )
      })}

      <div className="hero-slide-label" aria-hidden="true">
        {slides[current].label}
      </div>
    </div>
  )
}
