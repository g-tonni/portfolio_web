// eslint-disable-next-line no-unused-vars
import { motion, useTransform } from 'framer-motion'

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.1, 1])

  return (
    <motion.span style={{ opacity }} className="mr-1">
      {word}
    </motion.span>
  )
}

export default Word
