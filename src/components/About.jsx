import AnimatedText from './AnimatedText'
import AnimatedLines from './AnimatedLines'

function About() {
  const lines = [
    'My background combines a foundation in visual communication from the Academy of Fine Arts with Full-Stack Developer technical skills.',
    'This dual expertise allows me to oversee a project from every angle, managing both the code logic and the visual impact of the interface with equal focus.',
    "I am multitasking by nature and love to experiment: to me, code is a language that allows me to 'play' with graphics, turning visual elements into interactive and dynamic experiences.",
    'I take a hands-on, direct approach: I enjoy testing different solutions and getting into the details to find the most effective way to solve a problem, always ensuring a clean, scalable, and intuitive final product.',
  ]

  return (
    <div className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:py-30 xl:px-60 2xl:py-30 2xl:px-80 3xl:py-30 3xl:px-100 4xl:py-30 4xl:px-140">
      <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-20">
        ABOUT
      </p>
      <div className="flex flex-col md:flex-row">
        {/* <p className="w-full md:w-1/2 pb-10 md:pb-0 md:text-end md:pe-10 font-black text-3xl xl:text-5xl">
          Web development, logic, and design: I build interfaces that work
        </p> */}
        <div className="w-full md:w-1/2">
          <AnimatedText text="Web development, logic, and design: I build interfaces that work" />
        </div>

        <div className="w-full md:w-1/2">
          <AnimatedLines lines={lines} />
        </div>

        {/*  <p className="w-full md:w-1/2 md:ps-10 font-light">
          My background combines a foundation in{' '}
          <span className="font-bold">visual communication</span> from the
          Academy of Fine Arts with Full-Stack Developer{' '}
          <span className="font-bold">technical skills</span>. This dual
          expertise allows me to oversee a project from every angle, managing
          both the code logic and the visual impact of the interface with equal
          focus.
          <br />I am <span className="font-bold">multitasking</span> by nature
          and love to experiment: to me, code is a language that allows me to
          "play" with graphics, turning visual elements into{' '}
          <span className="font-bold">interactive and dynamic experiences</span>
          . I take a hands-on, direct approach: I enjoy testing different
          solutions and getting into the details to find the most effective way
          to solve a problem, always ensuring a clean, scalable, and intuitive
          final product.
        </p> */}
      </div>
    </div>
  )
}

export default About
