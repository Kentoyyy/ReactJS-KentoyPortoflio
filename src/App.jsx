import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Landing from './assets/Components/Home/landing'
import Skills from './assets/Components/Home/skills'
import TechStack from './assets/Components/Home/techstack'

const App = () => {
  return (
   <div>
    <Navbar/>
    <Landing/>
    <Skills/>
    <TechStack/>
   </div>
  )
}

export default App