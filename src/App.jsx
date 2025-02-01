import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'

function App() {
  return (
    <>
      <div className="w-full h-screen text-white">
        <Navbar />
        <LandingPage />
      </div>
    </>
  )
}

export default App
