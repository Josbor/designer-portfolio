
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import Portfolio from './components/portfolio'
import Skills from './components/skills'
import Experience from './components/experience'
import Contact from './components/contact'


function App ()
{

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
