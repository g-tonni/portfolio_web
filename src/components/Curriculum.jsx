import asterisco from '../assets/asterisco.png'

function Curriculum() {
  return (
    <div className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:py-30 xl:px-60 2xl:py-30 2xl:px-80 3xl:py-30 3xl:px-100 4xl:py-30 4xl:px-140">
      <p className="font-wide-ex text-lg font-medium text-brand-dark/50 pb-20">
        CURRICULUM
      </p>
      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-start">
        <div className="w-15">
          <img src={asterisco} alt="Asterisco" className="w-full" />
        </div>

        <p className="py-20 font-medium text-3xl lg:text-4xl">
          Want to learn more about my background? Download my CV and explore my
          experience.
        </p>

        <div className="bg-brand-dark hover:bg-brand-dark/80 shadow-xl shadow-brand-dark/20 text-brand-light font-bold transition-colors duration-300 cursor-pointer rounded-lg py-3 px-8">
          Download Curriculum
        </div>
      </div>
    </div>
  )
}

export default Curriculum
