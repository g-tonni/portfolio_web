import asterisco from '../assets/asterisco.png'

function Navbar () {
  return (
    <div className='sticky top-0 z-50 w-full border-b border-brand-light/10 bg-brand-light/70 backdrop-blur-xs'>

    <div className="w-full py-5 px-10 flex justify-between items-center text-xl font-medium">
        <p>About</p>
        <img src={asterisco} alt="Asterisco" className='w-4 h-4'/>
        <p>Skills</p>
        <img src={asterisco} alt="Asterisco" className='w-4 h-4'/>
        <p>Project</p>
        <img src={asterisco} alt="Asterisco" className='w-4 h-4'/>
        <p>Curriculum</p>
        <img src={asterisco} alt="Asterisco" className='w-4 h-4'/>
        <p>Contact</p>
    </div>
    </div>
  )
}

export default Navbar