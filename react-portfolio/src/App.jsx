import { useState } from 'react'

import './App.css'
import HeroNav from './heronav/HeroNav'
import AboutMe from './aboutme/AboutMe'
import Skills from './skills/Skills'
import Portfolio from './portfolio/Portfolio'
import Footer from './footer/Footer'

function App() {

  return (
    <>
      <HeroNav />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
