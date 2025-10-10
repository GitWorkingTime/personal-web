import { useState } from 'react'
import darkModeButton from './assets/webp/icons8-dark-mode-50.webp'
import githubIcon from './assets/webp/github-mark.webp'
import linkedInIcon from './assets/webp/InBug-Black.webp'
import itchIcon from './assets/webp/itchio-logo-textless-black.webp'
import resume from './assets/Resume_External.pdf'

function App() {
  return (
    <>
    <div className="navbar">
      <div className="navbar-left">
        <div>Home</div>
        <div>Portfolio</div>
      </div>
      <div className="navbar-right">
        <button className='links-contact links-button links-light'>Contact Me</button>
        <img className='dark-mode-button links-button' src={darkModeButton} height={30} width={30}></img>
      </div>
    </div>
    <div className="home">
      <div className="home-title">
        Hi, My name is <br></br>
        Daniel Lee
      </div>

      <div className="home-description">
        A First Year student at the University of Waterloo, studying Computer Engineering. Excited to keep learning!
      </div>

      <div className="links">
        <a href={resume} download="Resume" target="_blank">
         <button className='links-resume links-button links-dark'>Download Resume</button>
        </a>
        <a href="https://github.com/GitWorkingTime" target="_blank" rel="noopener noreferrer">
          <button className='links-github links-button'>
            <img src={githubIcon} height={40} width={40} alt="GitHub Icon"></img>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/daniel-s-l/" target="_blank" rel="noopener noreferrer">
          <button className='links-linkedin links-button'>
            <img src={linkedInIcon} height={40} width={40} alt="LinkedIn Icon"></img>
          </button>
        </a>
        <a href="https://doopsgame.itch.io/" target="_blank" rel="noopener noreferrer">
          <button className='links-itch links-button'>
            <img src={itchIcon} height={40} width={40} alt="Itch.io Icon"></img>
          </button>
        </a>
      </div>
    </div>
    </>
  )
}

function Download(){
  const downloadFile = () => {

  }
}

export default App
