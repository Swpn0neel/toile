import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Engage from "./components/Engage/Engage";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import Auth from "./auth/Auth";
import './index.css'

function App() {
  return (
    <>
      <Cursor/>
      <Navbar/>
      <Hero/>
      <About/>
      <Gallery/>
      <Engage/>
      <Footer/>
    </>
  )
}

export default App
