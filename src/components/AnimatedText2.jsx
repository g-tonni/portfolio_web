// eslint-disable-next-line no-unused-vars
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Word from './Word'

function AnimatedText2({ text }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 77%'],
  })

  const words = text.split(/(\s+)/)

  return (
    <p
      ref={ref}
      className="font-black text-3xl md:text-2xl lg:text-3xl 4xl:text-4xl"
    >
      {words.map((word, i) => {
        const start = (i / words.length) * 0.8
        const end = Math.min(start + 0.2, 1)

        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        )
      })}
    </p>
  )
}

export default AnimatedText2
