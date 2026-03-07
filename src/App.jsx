import AboutMe from './sections/aboutMe'
import Footer from './sections/Footer'
import DesktopHeader from './sections/DesktopHeader'
import HireMe from './sections/HireMe'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import MobileHeader from './sections/MobileHeader'

function App() {
  return (
    <div className='overflow-hidden'>
      <MobileHeader />
      <DesktopHeader />
      <AboutMe />
      <Skills />
      <Projects />
      <HireMe />
      <Footer />
    </div>
  )
}

export default App
