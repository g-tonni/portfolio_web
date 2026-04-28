import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Curriculum from './components/Curriculum'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Curriculum />
      <Contact />
      <div className="py-15 md:py-25 text-lg font-medium flex justify-center items-center">
        Giada Tonni@2026
      </div>
    </>
  )
}

export default App
