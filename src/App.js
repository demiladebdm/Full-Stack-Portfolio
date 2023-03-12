import React from 'react'

//importing components
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

//importing Styles and bootstrap
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
