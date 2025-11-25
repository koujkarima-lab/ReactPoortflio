import { useState } from 'react'

import './App.css'
import HeroNav from './heronav/HeroNav'
import AboutMe from './heronav/aboutme/AboutMe'
import Skills from './skills/Skills'

function App() {

  return (
    <>
      <HeroNav />
      <AboutMe />
      <Skills />
    </>
  )
}

export default App
