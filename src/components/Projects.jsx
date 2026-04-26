import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../projects'
import ProjectModal from './ProjectModal'
import { IoClose } from 'react-icons/io5'

function Projects() {
  const [openModal, setOpenModal] = useState(0)

  return (
    <>
      <div className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:py-30 xl:px-60 2xl:py-30 2xl:px-80 3xl:py-30 3xl:px-100 4xl:py-30 4xl:px-140">
        <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-20">
          PROJECTS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
          {projects.map((project) => {
            return (
              <ProjectCard
                setOpenModal={setOpenModal}
                project={project}
                key={project.id}
              />
            )
          })}
        </div>
      </div>

      {openModal > 0 && (
        <div className="fixed w-full h-screen top-0 left-0 bg-brand-dark/60 z-100 backdrop-blur-sm md:py-20 md:px-15 lg:px-30 xl:px-60 2xl:px-80 3xl:px-100 4xl:px-140">
          <div className="bg-brand-light md:rounded-3xl w-full h-full overflow-y-auto px-5 md:px-15 py-5 md:py-10 border-5 border-y-5 md:border-y-20 border-transparent relative">
            <div
              className="sticky top-0 right-0 flex justify-end text-brand-dark/70 hover:text-brand-dark transition-colors duration-200 md:translate-x-10 md:-translate-y-10 pe-4 md:pe-0"
              onClick={() => {
                setOpenModal('')
              }}
            >
              <IoClose className="w-7 h-7 bg-brand-light/40 backdrop-blur-2xl rounded-full p-1" />
            </div>
            <ProjectModal id={openModal} />
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
