import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import ProjectsGrid from './components/sections/ProjectsGrid'
import StarfieldCanvas from './components/ui/StarfieldCanvas'

export default function App() {
  return (
    <>
      <StarfieldCanvas />
      <div className="scan-line" aria-hidden="true" />
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  )
}
