import { FaExternalLinkAlt } from 'react-icons/fa'

function ProjectCard({ setOpenModal, project }) {
  return (
    <div className="flex flex-col w-full group cursor-pointer pb-5 md:pb-0">
      <div
        className="relative w-full h-80 2xl:h-90 3xl:h-100 overflow-hidden rounded-2xl shadow-lg shadow-brand-dark/20"
        onClick={() => {
          setOpenModal(project.id)
        }}
      >
        <img
          src={project.image_card}
          alt="Project Photo"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-brand-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 backdrop-blur-[2px]">
          <p className="text-brand-light font-semibold text-xl flex items-center">
            <span className="pe-3">View project</span> <FaExternalLinkAlt />
          </p>
        </div>
      </div>

      <p className="py-4 md:py-5 font-bold text-lg md:text-xl">
        {project.title}
      </p>

      {/*  <div className="flex items-center">
        {
          project.categories.map((category, i) => {
            return (
              <div key={i} className="py-2 px-6 bg-olive-50 border border-brand-dark/20 rounded-full text-xs lg:text-sm font-bold text-brand-dark/50 me-2 whitespace-nowrap">
                {category}
              </div>
            )
          })
        }
      </div> */}
    </div>
  )
}

export default ProjectCard
