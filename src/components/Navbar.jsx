import asterisco from '../assets/asterisco.png'

function Navbar () {
  return (
    <div className='sticky top-0 z-50 w-full border-b border-brand-light/10 bg-brand-light/70 backdrop-blur-md'>

    <div className="w-full py-5 px-10 flex justify-between items-center text-xl font-medium">
        <p className='hover:text-brand-dark/50 transition-colors duration-200 cursor-pointer'>About</p>
        <img src={asterisco} alt="Asterisco" className='w-4 h-4'/>
        <p className='hover:text-brand-dark/50 transition-colors duration-200 cursor-pointer'>Skills</p>
        <img src={asterisco} alt="Asterisco" className='w-4 h-4'/>
        <p className='hover:text-brand-dark/50 transition-colors duration-200 cursor-pointer'>Project</p>
        <img src={asterisco} alt="Asterisco" className='w-4 h-4'/>
        <p className='hover:text-brand-dark/50 transition-colors duration-200 cursor-pointer'>Curriculum</p>
        <img src={asterisco} alt="Asterisco" className='w-4 h-4'/>
        <p className='hover:text-brand-dark/50 transition-colors duration-200 cursor-pointer'>Contact</p>
    </div>
    </div>
  )
}

export default Navbar