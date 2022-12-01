import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
  
  

  
  return (

    <div className="container-fluid">
      <section id="nav">

      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid gx-0">
          <a class="navbar-brand gx-0" href="#">Austin Grant</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="#">Projects</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> More</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">About Me</a></li>
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

      <section id="land">

        <div className='landing row align-items-center'>
          <div className='col-lg-6 Spline'>
            <Spline scene="https://prod.spline.design/55LWcQxXwgrHJ8CJ/scene.splinecode" />
          </div>
          
          <div className='head-text col-lg-3 text-center'>
            <h1>Austin Grant.</h1>
            <h3>Web Developer</h3>
            <h3>Musician</h3>
            <h3>Creative</h3>
          </div>
          
        </div>
      
      </section>

      <section id="about">
        <div className="row align-items-center">
          <div className='col-lg-12 text-center gx-2'>
            <p>About me.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
