import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Landing from './assets/Components/Home/landing'
import Skills from './assets/Components/Home/skills'
import TechStack from './assets/Components/Home/techstack'
import Work from './assets/Components/Home/work'
import Cert from './assets/Components/Home/certificates'


const App = () => {
  return (
   <div>
    <Navbar/>
    <Landing/>
    <Skills/>
    <TechStack/>
    <Work/>
    <Cert/>
   
   </div>
  )
}

export default App