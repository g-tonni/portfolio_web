import foto from '../assets/copertina linkedin 2-01.png'
import { FaExternalLinkAlt } from 'react-icons/fa'

function ProjectCard({ setProject }) {
  return (
    <div className="flex flex-col w-full group cursor-pointer pb-10 md:pb-0">
      <div
        className="relative w-full h-80 2xl:h-90 3xl:h-100 overflow-hidden rounded-2xl shadow-lg shadow-brand-dark/20"
        onClick={() => {
          setProject('project1')
        }}
      >
        <img
          src={foto}
          alt="Project Photo"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-brand-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 backdrop-blur-[2px]">
          <p className="text-brand-light font-semibold text-xl flex items-center">
            <span className="pe-3">View project</span> <FaExternalLinkAlt />
          </p>
        </div>
      </div>

      <p className="py-4 md:py-6 font-bold md:text-lg">My Project</p>

      <div className="flex items-center">
        <div className="py-2 px-6 bg-olive-50 border border-brand-dark/20 rounded-full text-xs md:text-sm font-bold text-brand-dark/50">
          Web Development
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
