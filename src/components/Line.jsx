// eslint-disable-next-line no-unused-vars
import { motion, useTransform, useSpring } from 'framer-motion'

function Line({ text, progress, start, end }) {
  const rawX = useTransform(progress, [start, end], [40, 0])
  const rawOpacity = useTransform(progress, [start, end], [0, 1])

  const x = useSpring(rawX, {
    stiffness: 120,
    damping: 25,
    mass: 0.6,
  })

  const opacity = useSpring(rawOpacity, {
    stiffness: 120,
    damping: 25,
    mass: 0.6,
  })

  return (
    <motion.p style={{ x, opacity }} className="mb-2">
      {text}
    </motion.p>
  )
}

export default Line
