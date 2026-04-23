import { useState } from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  const [project, setProject] = useState('')

  return (
    <>
      <div className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:py-30 xl:px-60 2xl:py-30 2xl:px-80 3xl:py-30 3xl:px-100 4xl:py-30 4xl:px-140">
        <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-20">
          PROJECTS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
          <ProjectCard setProject={setProject} />
          <ProjectCard />
        </div>
      </div>

      {project.length > 0 && (
        <div className="fixed w-full h-screen top-0 left-0 bg-brand-dark/60 z-100 backdrop-blur-sm py-20 px-60">
          <div className="bg-brand-light rounded-3xl w-full h-full overflow-y-auto px-10 py-5 border-5 border-y-20 border-transparent">
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
            <p>ciao</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
