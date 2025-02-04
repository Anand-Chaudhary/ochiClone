import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Eyes from './components/Eyes/Eyes'
import Features from './components/Features/Features'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  // eslint-disable-next-line
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Features />
        <Cards />
        <Footer />
      </div>
    </>
  )
}

export default App
