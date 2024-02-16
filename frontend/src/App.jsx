import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

function App () {
  return (
    <>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type="services" />
      </section>
      <section>
       <Services/>
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio/>
      <section id='Contact'>Contact</section>
    </>
  )
}

export default App
