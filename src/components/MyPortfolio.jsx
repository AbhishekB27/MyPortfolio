import React from 'react'
import About from './About'
import CircleIndicator from './CicleIndicator'
import Contact from './Contact'
import HeroSection from './HeroSection'
import Header from './layout/Header'
import Projects from './Projects'
import Skills from './Skills'
import TopButton from './TopButton'


const MyPortfolio = () => {
  return (
    <div className=''>
        <Header/>
        <HeroSection/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <TopButton/>
    </div>
  )
}

export default MyPortfolio