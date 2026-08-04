import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      // dot follows instantly
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    let rafId
    const animateRing = () => {
      // ring eases toward the mouse position (creates the lag/trail effect)
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      rafId = requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animateRing()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-lime pointer-events-none z-[9999] hidden md:block"
        style={{ transform: 'translate(-9999px, -9999px)', marginLeft: '-4px', marginTop: '-4px' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-lime pointer-events-none z-[9999] hidden md:block"
        style={{ transform: 'translate(-9999px, -9999px)', marginLeft: '-16px', marginTop: '-16px' }}
      />
    </>
  )
}