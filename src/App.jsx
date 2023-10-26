import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Engage from "./components/Engage/Engage";
import Footer from "./components/Footer/Footer";
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Gallery></Gallery>
      <Engage></Engage>
      <Footer></Footer>
    </>
  )
}

export default App
