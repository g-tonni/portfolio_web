import asterisco from '../assets/asterisco.png'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function Curriculum() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div
      id="curriculum"
      className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:py-30 xl:px-60 2xl:px-80 3xl:px-100 4xl:px-140"
    >
      <p className="font-wide-ex text-lg font-medium text-brand-dark/50 pb-20">
        CURRICULUM
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-start"
      >
        <motion.div variants={item} className="w-15">
          <img src={asterisco} alt="Asterisco" className="w-full" />
        </motion.div>

        <motion.p
          variants={item}
          className="py-20 font-medium text-3xl lg:text-4xl"
        >
          Want to learn more about my background? Download my CV and explore my
          experience.
        </motion.p>

        <motion.a
          variants={item}
          href="/CV-GIADA-TONNI.pdf"
          download="CV-GIADA-TONNI.pdf"
          className="bg-brand-dark hover:bg-brand-dark/80 shadow-xl shadow-brand-dark/20 text-brand-light font-bold transition-colors duration-300 cursor-pointer rounded-lg py-3 px-8"
        >
          Download Curriculum
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Curriculum
