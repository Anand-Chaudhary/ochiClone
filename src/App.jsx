import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Eyes from './components/Eyes/Eyes'

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
      </div>
    </>
  )
}

export default App
