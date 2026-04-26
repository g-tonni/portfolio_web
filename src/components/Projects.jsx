import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, useScroll } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../projects'
import ProjectModal from './ProjectModal'
import { IoClose } from 'react-icons/io5'

function Projects() {
  const [openModal, setOpenModal] = useState(0)

  const card = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
    }),
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.08,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <>
      <div className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:px-60 2xl:px-80 3xl:px-100 4xl:px-140">
        <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-20">
          PROJECTS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            >
              <ProjectCard setOpenModal={setOpenModal} project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      {openModal > 0 && (
        <div className="fixed w-full h-screen top-0 left-0 bg-brand-dark/60 z-100 backdrop-blur-sm md:py-20 md:px-15 lg:px-30 xl:px-60 2xl:px-80 3xl:px-100 4xl:px-140">
          <div className="bg-brand-light md:rounded-3xl w-full h-full overflow-y-auto px-5 md:px-15 py-5 md:py-10 relative">
            <div
              className="sticky top-0 flex justify-end text-brand-dark/70 hover:text-brand-dark transition-colors duration-200"
              onClick={() => setOpenModal(0)}
            >
              <IoClose className="w-7 h-7 bg-brand-light/40 backdrop-blur-2xl rounded-full p-1 cursor-pointer" />
            </div>

            <ProjectModal id={openModal} />
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
