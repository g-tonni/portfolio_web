import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { FaPhoneFlip } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import logoEpicode from '../assets/logo epicode.png'
import AnimatedText2 from './AnimatedText2'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function Contact() {
  const item = {
    hidden: () => ({
      opacity: 0,
      x: 40,
    }),
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15,
        ease: 'easeOut',
      },
    }),
  }

  const items = [
    {
      label: 'Linkedin',
      icon: <FaLinkedin className="w-6 h-6" />,
      value: 'https://www.linkedin.com/in/giada-tonni/',
    },
    {
      label: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      value: 'https://github.com/g-tonni',
    },
    {
      label: 'Epicode Talent Profile',
      icon: <img src={logoEpicode} className="w-6 h-6" />,
      value:
        'https://talent.epicode.com/talent/80df17aa-43d4-4c55-b5a3-2a93ffc5cba2',
    },
    {
      label: 'Phone',
      icon: <FaPhoneFlip className="w-6 h-6" />,
      value: '+39 393 50 66 676',
    },
    {
      label: 'Email',
      icon: <IoIosMail className="w-6 h-6" />,
      value: 'tonni.giada.210802@gmail.com',
    },
  ]

  return (
    <div
      id="contact"
      className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:py-30 xl:px-60 2xl:px-80 3xl:px-100 4xl:px-140"
    >
      <p className="font-wide-ex text-lg font-medium text-brand-dark/50 pb-20">
        CONTACT
      </p>

      <div className="flex flex-col md:flex-row items-end">
        <div className="w-full md:w-1/3 flex pb-20 md:pb-0 h-full items-end">
          <AnimatedText2 text="Always looking for new challenges between code and design. If my journey sparks your interest, feel free to contact me!" />
        </div>

        <div className="w-full md:w-2/3 flex flex-col md:items-end">
          {items.map((el, index) => {
            const reversedIndex = items.length - 1 - index

            return (
              <motion.div
                key={el.label}
                custom={reversedIndex}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className={`flex flex-col md:items-end ${index === items.length - 1 ? 'pb-0' : 'pb-6'}`}
              >
                <div className="flex items-center pb-1">
                  <p className="text-lg font-bold pe-4">{el.label}</p>
                  {el.icon}
                </div>

                <p className="font-light md:text-end">{el.value}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Contact
