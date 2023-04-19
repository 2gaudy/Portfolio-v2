import reactLogo from './assets/react.svg'
import { useState } from 'react'
import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
  
  

  
  return (

    <div className="container-fluid">
      <section id="nav">

      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid gx-1">
          <a class="navbar-brand gx-2" href="#">Austin Grant</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li class="nav-item">
                 <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> More</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#about">About Me</a></li>
                  <li><a class="dropdown-item" href="#">Socials</a></li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li><a class="dropdown-item" href="#">Contact</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Other</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

      </section>

      <section id="main">

        <section id="land">

          <div className='landing row align-items-center'>
            <div className='col-md-12 col-lg-4 Spline'>
              <Spline scene="https://prod.spline.design/55LWcQxXwgrHJ8CJ/scene.splinecode" />
            </div>
            
            <div className='head-text col-lg-3 text-center'>
              <h1>Austin Grant.</h1>
              <h3>Web Developer</h3>
              {/* <h3>Musician</h3> */}
              <h3>Creative</h3>
            </div>
            
          </div>
        
        </section>

        {/* <hr className='hr'/> */}

        <section id="about">
          <div className="about-section row align-items-center">
            <div className='Spline col-l-8 text-center gx-2'>
              <Spline className='Spline' scene="https://prod.spline.design/5lItWqZIBkFaXNm2/scene.splinecode" />
            </div>
            <div className='col-lg-3 text-center gx-2 skills'>

              <h1 className='skills-head'>Some of my Skills are...</h1>
              
              <ul className="skills-list list-group">
                <li><h2>React/React Native</h2></li>
                <li><h2>Javascript</h2></li>
                <li><h2>Python</h2></li>
                <li><h2>Node.Js</h2></li>
                <li><h2>ExpressJs</h2></li>
                <li><h2>Flask</h2></li>
                <li><h2>Prisma</h2></li>
              </ul>

            </div>
          </div>
        </section>

        {/* <hr className='hr'/> */}

        <section id="projects">

          <div className='row align-items-center justify-content-center'>

          
            <div className='col-md-4 col-lg-4 Spline'>
              <Spline scene="https://prod.spline.design/59usR6rwqfj4rYSl/scene.splinecode" />
            </div>

            <div className='container-fluid row project-cards'>
              

              <div className='d-flex justify-content-center align-items-center card project-card p-3' >
                <img src='src/img/snake-game.png' class="card-img-top"/>
                <div className='d-flex flex-column card-body'>
                  <h2>Snake</h2>
                  {/* <p className="card-text">This Project Contained:</p> */}
                  <button type="button" class="btn btn-warning">View</button>
                </div>

              </div>

              <div className='d-flex justify-content-center align-items-center card project-card p-3' >
                <img src="src/img/nicer-notes.png" class="card-img-top" alt="..."/>
                <div className='d-flex flex-column card-body'>
                  <h2>Nicer Notes Notetaker</h2>
                  {/* <p className="card-text">This Project Contained:</p> */}
                  <button type="button" class="btn btn-warning">View</button>
                </div>

              </div>

              <div className='d-flex justify-content-center align-items-center card project-card p-3' >
                <img src="src/img/pass-manager.png" class="card-img-top" alt="..."/>
                <div className='d-flex flex-column card-body'>
                  <h2>Local Password Manager</h2>
                  {/* <p className="card-text">This Project Contained:</p> */}
                  <button type="button" class="btn btn-warning">View</button>
                </div>

              </div>

              <div className='d-flex justify-content-center align-items-center card project-card p-3' >
                <img src="src/img/tindog.png" class="card-img-top" alt="..."/>
                <div className='d-flex flex-column card-body'>
                  <h2>Fake Tinder for Dogs</h2>
                  <button type="button" class="btn btn-warning">View</button>
                </div>

              </div>

              

              <div className='d-flex justify-content-center align-items-center card project-card p-3' >
                <img src="src/img/jordan-site.png" class="card-img-top" alt="..."/>
                <div className='d-flex flex-column card-body'>
                  <h2>Jordan Lynton's Site</h2>
                  <button type="button" class="btn btn-warning">View</button>
                  
                </div>

              </div> 

            </div>

          </div>



        </section>
        


      </section>
    </div>
  )
}

export default App
