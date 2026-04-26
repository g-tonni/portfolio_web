import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import asterisco from '../assets/asterisco.png'
import WebDevelopment from './WebDevelopment'
import Design from './Design'
import Modeling from './Modeling'
import Creative from './Creative'
import Photo from './Photo'

function Skills() {
  const [qualifica, setQualifica] = useState('web')

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    initial: { opacity: 0, x: 40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      x: -40,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  }

  return (
    <div
      id="skills"
      className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:py-30 xl:px-60 2xl:px-80 3xl:px-100 4xl:px-140"
    >
      <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-20">
        SKILLS
      </p>

      <div className="flex flex-col md:flex-row md:justify-between">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="w-full flex md:flex-col items-start md:w-1/3 lg:w-1/2 font-medium lg:text-lg overflow-x-auto mb-6 md:mb-0"
        >
          {[
            { id: 'web', label: 'Web Development' },
            { id: 'design', label: 'Design & Motion Graphics' },
            { id: '3d', label: '3D Modeling & Rendering' },
            { id: 'creative', label: 'Creative Coding' },
            { id: 'photo', label: 'Photography & Video' },
          ].map((itemData) => (
            <motion.div
              key={itemData.id}
              variants={item}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setQualifica(itemData.id)}
              className={`${
                qualifica === itemData.id
                  ? 'bg-brand-dark/20'
                  : 'bg-transparent'
              } flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2 me-2 md:me-0`}
            >
              <div
                className={`${
                  qualifica === itemData.id ? 'opacity-100' : 'opacity-80'
                } w-full flex items-center px-3 py-2 lg:px-6`}
              >
                <div className="w-7 lg:w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-3 lg:pe-6"
                  />
                </div>
                <p className="whitespace-nowrap">{itemData.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full md:w-2/3 lg:w-1/2 md:ps-10 lg:ps-0">
          <div className="bg-olive-50 border border-brand-dark/30 rounded-3xl border-dashed p-15 2xl:px-18 3xl:px-20 font-light shadow-lg shadow-brand-dark/20 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={qualifica}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ once: false }}
              >
                {qualifica === 'web' && <WebDevelopment />}
                {qualifica === 'design' && <Design />}
                {qualifica === '3d' && <Modeling />}
                {qualifica === 'creative' && <Creative />}
                {qualifica === 'photo' && <Photo />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
