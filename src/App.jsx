import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Product from './components/Product'
import Team from './components/Team'
import About from './components/About'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Product />
      <Team />
      <About />
      <Pricing />
    </div>
  )
}

export default App
