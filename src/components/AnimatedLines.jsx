import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import Line from './Line'

function AnimatedLines({ lines }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 40%'],
  })

  return (
    <div ref={ref} className="md:ps-10 font-light">
      {lines.map((line, i) => {
        const total = lines.length
        const reversedIndex = total - i

        const start = reversedIndex * 0.05
        const end = start + 0.2

        return (
          <Line
            key={i}
            text={line}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        )
      })}
    </div>
  )
}

export default AnimatedLines
