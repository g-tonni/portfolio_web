import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../projects";
import ProjectModal from "./ProjectModal";
import { IoClose } from "react-icons/io5";

function Projects() {
  const [openModal, setOpenModal] = useState(0);

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
        ease: "easeOut",
      },
    }),
  };

  const backdrop = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const modal = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 40,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.25,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <div
        id="projects"
        className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:px-60 2xl:px-80 3xl:px-100 4xl:px-140"
      >
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
              viewport={{ once: false, amount: 0.2 }}
              className="will-change-transform"
            >
              <ProjectCard setOpenModal={setOpenModal} project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
  {openModal > 0 && (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="fixed w-full h-screen top-0 left-0 bg-brand-dark/60 z-100 backdrop-blur-sm md:py-20 md:px-15 lg:px-30 xl:px-60 2xl:px-80 3xl:px-100 4xl:px-140"
    >
      <motion.div
        variants={modal}
        initial="hidden"
        animate="show"
        exit="exit"
        className="bg-brand-light md:rounded-3xl w-full h-full overflow-y-auto px-5 md:px-15 py-5 md:py-10 border-5 border-y-5 md:border-y-20 border-transparent relative"
      >
        <div
          className="sticky top-0 flex justify-end text-brand-dark/70 hover:text-brand-dark transition-colors duration-200 pe-4 md:pe-0 md:translate-x-10 md:-translate-y-10 z-50"
          onClick={() => setOpenModal(0)}
        >
          <IoClose className="w-7 h-7 bg-brand-light/40 backdrop-blur-2xl rounded-full p-1 cursor-pointer" />
        </div>

        <ProjectModal id={openModal} />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}

export default Projects;
