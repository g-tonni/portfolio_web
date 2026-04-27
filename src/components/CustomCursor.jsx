import { useEffect, useState } from 'react'

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

  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isLarge) return

    const moveCursor = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
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
    }
  }, [isLarge])

  // 🚫 niente cursore sotto lg
  if (!isLarge) return null

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-9999 rounded-full transition-all duration-200 ease-out will-change-transform backdrop-blur-sm
        ${
          isHovered
            ? 'w-6 h-6 bg-brand-dark shadow-lg'
            : 'w-4 h-4 bg-brand-dark/40'
        }
      `}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  )
}

export default CustomCursor