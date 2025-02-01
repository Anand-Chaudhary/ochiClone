import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Marquee from './components/Marquee/Marquee'

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <LandingPage />
        <Marquee />
      </div>
    </>
  )
}

export default App
