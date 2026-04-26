import { useState, useEffect } from 'react'
import asterisco from '../assets/asterisco.png'

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 z-50 w-full border-b border-brand-light/10 bg-brand-light/50 backdrop-blur-sm transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}
    >
      <div className="w-full py-5 px-6 md:px-10 flex justify-between items-center text-sm md:text-base lg:text-xl font-medium">
        <p
          onClick={() => scrollToSection('about')}
          className="hover:text-brand-dark/50 transition-colors duration-200 cursor-pointer"
        >
          About
        </p>
        <img
          src={asterisco}
          alt="Asterisco"
          className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 md:h-4"
        />
        <p
          onClick={() => scrollToSection('skills')}
          className="hover:text-brand-dark/50 transition-colors duration-200 cursor-pointer"
        >
          Skills
        </p>
        <img
          src={asterisco}
          alt="Asterisco"
          className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 md:h-4"
        />
        <p
          onClick={() => scrollToSection('projects')}
          className="hover:text-brand-dark/50 transition-colors duration-200 cursor-pointer"
        >
          Projects
        </p>
        <img
          src={asterisco}
          alt="Asterisco"
          className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 md:h-4"
        />
        <p
          onClick={() => scrollToSection('curriculum')}
          className="hover:text-brand-dark/50 transition-colors duration-200 cursor-pointer"
        >
          Curriculum
        </p>
        <img
          src={asterisco}
          alt="Asterisco"
          className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 md:h-4"
        />
        <p
          onClick={() => scrollToSection('contact')}
          className="hover:text-brand-dark/50 transition-colors duration-200 cursor-pointer"
        >
          Contact
        </p>
      </div>
    </div>
  )
}

export default Navbar
