import { useState } from 'react'

import HeroNav from './heronav/HeroNav'
import AboutMe from './aboutme/AboutMe'
import Skills from './skills/Skills'
import Portfolio from './portfolio/Portfolio'
import Footer from './footer/Footer'
import './App.css'

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
