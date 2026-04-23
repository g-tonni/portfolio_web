import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { FaPhoneFlip } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import logoEpicode from '../assets/logo epicode.png'

function Contact() {
  return (
    <div className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:py-30 xl:px-60 2xl:py-30 2xl:px-80 3xl:py-30 3xl:px-100 4xl:py-30 4xl:px-140">
      <p className="font-wide-ex text-lg font-medium text-brand-dark/50 pb-20">
        CONTACT
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 items-end flex pb-20 md:pb-0">
          <p className="font-black text-3xl md:text-2xl lg:text-3xl 4xl:text-4xl">
            Always looking for new challenges between code and design. If my
            journey sparks your interest, feel free to contact me!
          </p>
        </div>
        <div className="w-full md:w-2/3 flex flex-col md:justify-end md:items-end">
          <a
            href="https://www.linkedin.com/in/giada-tonni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col md:justify-end md:items-end pb-6 group">
              <div className="flex items-center pb-1 hover:text-brand-dark/70 transition-colors duration-200 cursor-pointer">
                <p className="text-lg font-bold pe-4">Linkedin</p>
                <FaLinkedin className="w-6 h-6" />
              </div>
              <p className="font-light md:text-end">
                https://www.linkedin.com/in/giada-tonni/
              </p>
            </div>
          </a>

          <div className="flex flex-col md:justify-end md:items-end pb-6">
            <div className="flex items-center pb-1">
              <p className="text-lg font-bold pe-4">GitHub</p>
              <FaGithub className="w-6 h-6" />
            </div>
            <p className="font-light md:text-end">https://github.com/g-tonni</p>
          </div>

          <div className="flex flex-col md:justify-end md:items-end pb-6">
            <div className="flex items-center pb-1">
              <p className="text-lg font-bold pe-4">Epicode Talent Profile</p>
              <img src={logoEpicode} alt="Logo Epicode" className="w-6 h-6" />
            </div>
            <p className="font-light md:text-end">
              https://talent.epicode.com/talent/
              <br />
              80df17aa-43d4-4c55-b5a3-2a93ffc5cba2
            </p>
          </div>

          <div className="flex flex-col md:justify-end md:items-end pb-6">
            <div className="flex items-center pb-1">
              <p className="text-lg font-bold pe-4">Phone</p>
              <FaPhoneFlip className="w-6 h-6" />
            </div>
            <p className="font-light md:text-end">+39 393 50 66 676</p>
          </div>

          <div className="flex flex-col md:justify-end md:items-end">
            <div className="flex items-center pb-1">
              <p className="text-lg font-bold pe-4">Email</p>
              <IoIosMail className="w-6 h-6" />
            </div>
            <p className="font-light md:text-end">
              tonni.giada.210802@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
