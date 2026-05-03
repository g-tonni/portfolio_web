import { projects } from '../projects'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import SmartImage from './SmartImage'
import { FaExternalLinkAlt } from 'react-icons/fa'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function ProjectModal({ id }) {
  const project = projects.find((project) => project.id === id)

  if (!project) return null

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className="p-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4 }}
      >
        <p className="truncate text-4xl sm:text-5xl md:text-6xl font-wide-ex pb-5 lg:pb-0">
          {project.title}
        </p>
        <div className="flex items-center overflow-x-auto">
          {project.categories?.map((category, i) => (
            <div
              key={i}
              className="py-2 px-4 md:px-6 bg-olive-50 border border-brand-dark/20 rounded-lg text-xs lg:text-sm font-bold text-brand-dark/50 me-2 md:me-0 md:ms-2 whitespace-nowrap"
            >
              {category}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p
        className="whitespace-pre-line pt-15 md:pt-25 font-light text-sm md:text-base"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4 }}
      >
        {project.description}
      </motion.p>

      {project.media.images?.length > 0 && (
        <motion.div
          className="pt-15 md:pt-25"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4 }}
        >
          <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-8 md:pb-15">
            IMAGES
          </p>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            className="w-full rounded-2xl overflow-hidden shadow-xl shadow-brand-dark/15 group"
          >
            {project.media.images.map((image, i) => (
              <SwiperSlide key={i}>
                <div className="w-full aspect-video md:aspect-video overflow-hidden bg-stone-100">
                  <SmartImage src={image} alt={`${project.title} image ${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}

      {project.media.videos.length > 1 && (
        <motion.div
          className="pt-15 md:pt-25"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4 }}
        >
          <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-8 md:pb-15">
            VIDEO
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.media.videos.map((video, i) => {
              return (
                <div
                  key={i}
                  className={`w-full ${project.title === 'My View' ? 'aspect-video md:aspect-video' : ''} rounded-2xl overflow-hidden flex items-center justify-center bg-transparent`}
                >
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`h-full w-full ${project.title === 'My View' ? 'object-cover' : 'object-contain'}`}
                  />
                </div>
              )
            })}
          </div>
        </motion.div>
      )}

      {project.media.videos.length === 1 && (
        <motion.div
          className="pt-15 md:pt-25"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4 }}
        >
          <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-8 md:pb-15">
            VIDEO
          </p>

          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg shadow-brand-dark/15 bg-brand-dark">
            <iframe
              src={project.media.videos[0]}
              title={project.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        </motion.div>
      )}

      {project.media.book.length > 0 && (
        <motion.div
          className="pt-15 md:pt-25"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4 }}
        >
          <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-8 md:pb-15">
            BOOK
          </p>

          <div className="w-full aspect-4/3 md:aspect-video rounded-2xl overflow-hidden shadow-xl bg-brand-light border-3 border-brand-dark">
            <iframe
              src={project.media.book}
              title="Varco - Book"
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      )}

      {project.media.overview.length > 0 && (
        <motion.div
          className="pt-15 md:pt-25"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4 }}
        >
          <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-8 md:pb-15">
            OVERVIEW
          </p>

          <div className="w-full aspect-4/3 md:aspect-video rounded-2xl overflow-hidden shadow-xl bg-brand-light border-3 border-brand-dark">
            <iframe
              src={project.media.overview}
              title="Varco - Book"
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      )}

      {project.links.length > 0 && (
        <motion.div
          className="pt-15 md:pt-25"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4 }}
        >
          <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-8 md:pb-15">
            LINK
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.links.map((link, i) => {
              return (
                <a
                  key={i}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full aspect-square relative rounded-2xl overflow-hidden group">
                    <img
                      src={link.image}
                      alt="Link image"
                      className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-dark/60 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 backdrop-blur-[2px] p-5">
                      <p className="text-brand-light font-semibold flex items-center whitespace-pre-line">
                        <span className="pe-3">{link.invite}</span>{' '}
                        <FaExternalLinkAlt />
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default ProjectModal
