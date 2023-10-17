import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  )
}

export default App
