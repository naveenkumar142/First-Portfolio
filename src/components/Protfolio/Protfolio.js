import React from 'react'
import "./portfolio.css";
import car from "./car1.png";
import farming from "./farming1.png";
import rock from "./rock1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import amc from "./amc.webp";
import rjs from "./rjs22.jpg"
import pps from "./pps.png";
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
export default function Protfolio() {

  const firstExample = {
    size: 50,
    value: 5,
    edit:false,
  };
  return (
    <>
    <div className='container-fluid portfolio-main-div pt-5'>
      <div className='container'>
        <div className='text-center'>
          <h1 className='my-port pt-3 text-white'>Portfolio </h1>
          <h6 className='text-white'>I love what I do.I take great pride in what I do.</h6>
          <hr className='horizontal-line'/>
        </div>
        <div className='mt-5'>
          <h2 className='my-projects text-center text-white ps-5 pe-5'>My Projects</h2>
          <div className='col-lg-12 row  mt-5'>

            <div className='col-lg-4'>
                <div class="card">
                      <img src={farming} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">Organic Farming </h5>
                        <p class="card-text">Explore our vibrant farming website showcasing HTML and CSS craftsmanship. Discover agricultural insights, tips, and community engagement for a fruitful and sustainable farming journey</p>
                        <div>
                        <a href="https://github.com/naveenkumar142/FARMINGWESITE" target='_blank' class="btn btn-success"><FontAwesomeIcon icon={faCode} /> View Source-Code</a>
                        </div>
                        
                </div>
            </div>
                </div>


            <div className='col-lg-4'>
            <div class="card">
                      <img src={rock} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">Rock-Paper-Scissor Game</h5>
                        <p class="card-text">Experience classic fun on our interactive rock-paper-scissors game. Crafted with HTML, CSS, and JS, challenge friends or AI for strategic showdowns of this timeless game</p>
                        <a href="https://github.com/naveenkumar142/Rock-Paper-Scissors" target='_blank' class="btn btn-success"><FontAwesomeIcon icon={faCode} /> View Source-Code</a>
                </div>
            </div>
            </div>

            <div className='col-lg-4'>
            <div class="card">
                      <img src={car} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">Car Rental Website</h5>
                        <p class="card-text">"Navigate your travel plans effortlessly on our MERN-powered car rental site. Discover, book, and manage vehicles seamlessly for your journeys, all in one user-friendly platform</p>
                        <a href="https://github.com/naveenkumar142/rent-car"  target='_blank' class="btn btn-success"><FontAwesomeIcon icon={faCode} /> View Source-Code</a>
                </div>
            </div>
            </div>
          </div>

          <div className='mt-5'>
            <h1 className='text-center my-projects  education-heading'>Education</h1>
            <div className='text-start col-lg-4 mt-3'>
                              <div class="card mb-3 border border-dark">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={amc} class="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Bachelor of Engineering</h5>
                          <p class="card-text">I graduated with a BE in Computer Science from AMC Engineering College in 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>



            <div className='text-center mx-auto col-lg-4 mt-3'>
                              <div class="card mb-3 border border-dark">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={rjs} class="img-fluid rounded-start col-lg-12 col-10 mt-2" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Pre-University Course</h5>
                          <p class="card-text">In 2018, I successfully completed my Second PUC in PCMB from RJS First Grade College</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>






            <div className='text-end ms-auto mx col-lg-4 mt-3'>
                              <div class="card mb-3 border border-dark">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={pps} class="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title text-center">High School</h5>
                          <p class="card-text">I successfully completed my 10th grade education at Police Public School in the year 2016.</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

          </div>


          <div className='container '>
            <h1 className='text-center  top-skills pt-5'>Top Skills</h1>

            <div className='bg-white container skillss'>
              <div className='mx-auto text-center row container'>
                <div className='col-lg-6 pt-5'>
                  <h3>HTML</h3>
                <FontAwesomeIcon icon={faHtml5} className='html-5'/>
                </div>
                <div className='col-lg-6 pt-5'>
                <h3>CSS</h3>
                <FontAwesomeIcon icon={faCss3Alt} className='css-5'/>
                </div>
              </div>


              <div className='mx-auto text-center row container'>
                <div className='col-lg-6 pt-5'>
                  <h3>BOOTSTRAP</h3>
                <FontAwesomeIcon icon={faBootstrap} className='bootstrap' />
                </div>
                <div className='col-lg-6 pt-5'>
                  <h3>JAVASCRIPT</h3>
                <FontAwesomeIcon icon={faSquareJs} className='js-5'/>
                </div>
              </div>

              <div className='mx-auto text-center row container'>
                <div className='col-lg-6 pt-5'>
                  <h3>REACTJS</h3>
                <FontAwesomeIcon icon={faReact} className='react'/>
                </div>
                <div className='col-lg-6 pt-5'>
                  <h3>NODEJS</h3>
                <FontAwesomeIcon icon={faNode} className='node'/>
                </div>
              </div>



              <div className='mx-auto text-center row container'>
                <div className='col-lg-6 pt-5'>
                  <h3>JAVA</h3>
                <FontAwesomeIcon icon={faJava} className='java'/>
                </div>
                <div className='col-lg-6 pt-5'>
                  <h3>MONGODB</h3>
                <FontAwesomeIcon icon={faDatabase} className='mongodb'/>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
