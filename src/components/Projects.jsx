import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="w-full py-30 px-60">
      <p className="font-wide-ex text-lg font-medium text-brand-dark/50 pb-20">
        PROJECTS
      </p>
      <div className="grid grid-cols-2 gap-3">
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  );
}

export default Projects;
