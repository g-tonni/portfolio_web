import { motion, useTransform } from 'framer-motion'

function Line({ text, progress, start, end }) {
  const x = useTransform(progress, [start, end], [40, 0])
  const opacity = useTransform(progress, [start, end], [0, 1])

  return (
    <motion.p style={{ x, opacity }} className="mb-2">
      {text}
    </motion.p>
  )
}

export default Line
