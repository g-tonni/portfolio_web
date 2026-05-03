import { useEffect, useRef, useState } from 'react'

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      setIsLarge(window.innerWidth >= 768)
    }

    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  return isLarge
}

function CustomCursor() {
  const isLarge = useIsLargeScreen()
  const cursorRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isLarge) return

    let rafId

    const moveCursor = (e) => {
      if (!cursorRef.current) return

      rafId = requestAnimationFrame(() => {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      })
    }

    const handleMouseOver = (e) => {
      const target = e.target

      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsHovered(!!isInteractive)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(rafId)
    }
  }, [isLarge])

  if (!isLarge) return null

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-200 ease-out will-change-transform
        ${
          isHovered
            ? 'w-6 h-6 bg-brand-dark shadow-lg'
            : 'w-4 h-4 bg-brand-dark/40'
        }
      `}
    />
  )
}

export default CustomCursor
