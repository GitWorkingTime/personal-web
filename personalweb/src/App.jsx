import { useState } from 'react'
import { useRef } from 'react'
import darkModeButton from './assets/webp/icons8-dark-mode-50.webp'
import githubIcon from './assets/webp/github-mark.webp'
import linkedInIcon from './assets/webp/InBug-Black.webp'
import itchIcon from './assets/webp/itchio-logo-textless-black.webp'
import resume from './assets/Resume_External_Web.pdf'

function App() {
  const portfolioRef = useRef(null);
  const homeRef = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour: 'smooth'
    })
  }

  return (
    <>
    <div className="navbar">
      <div className="navbar-left">
        <button className='links-button' onClick={() => scrollToSection(homeRef)}>Home</button>
        <button className='links-button' onClick={() => scrollToSection(portfolioRef)}>Portfolio</button>
      </div>
      <div className="navbar-right">
        <button className='links-contact links-button links-light'>Contact Me</button>
        <button className='links-button'>
          <img src={darkModeButton} height={30} width={30}></img>
        </button>
      </div>
    </div>
    <div className="container">
      <div ref={homeRef} className="home">
        <div className="title">
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
      <div ref={portfolioRef} className="portfolio">
          <div className='title'>
            Portfolio
          </div>
          <div className='projects'>
            <div className='project-block'>
              <div className='project-block-text'>
                <div className='project-block-title'>Video games</div>
                <div className='project-block-description'>
                  A small collection of video games that uses <b>Unity</b> and <b>Godot</b>, <b>GDScript</b> and <b>C#</b>. Check it out here!
                </div>
              </div>
              <a className="project-block-link" href="https://doopsgame.itch.io/" target="_blank" rel="noopener noreferrer">
                <div className='links-button links-light'>Itch.io Page</div>
              </a>
            </div>
            <div className='project-block'>
              <div className='project-block-text'>
                <div className='project-block-title'>Basic HTTP Server</div>
                <div className='project-block-description'>
                  A Basic HTTP server utilizing <b>C</b> and <b>TCP/IP Protocols</b> to create a LAN server to host a basic chat messaging 
                  web-based app made in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.
                </div>
              </div>
              <a className="project-block-link" href="https://github.com/GitWorkingTime/CSE-FP-CS30-V2" target="_blank" rel="noopener noreferrer">
                <div className='links-button links-light'>GitHub</div>
              </a>
            </div>
          </div>
      </div>     
    </div>

    </>
  )
}

export default App
