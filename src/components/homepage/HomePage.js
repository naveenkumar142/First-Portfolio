import React from 'react';
import "./homepage.css";
import imag1 from "./iii.png";
import cv from "./na.pdf";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
    <>
    <div className='container-fluid home-page-im pt-5'>


      <div className='container pt-5 row'>
        <div className='col-lg-6 pt-4'>
          <div className='text-center pt-5'>
            <h2 className='my-3 hompage-name text-white'>I'm Naveen Kumar A</h2>
            <h2 className='hompage-name text-white'>
            <Typewriter
                      options={{
                        strings: [' A Full Stack Developer'],
                        autoStart: true,
                        loop: true,
                      }}
                      /></h2>

            <div className='text-center mx-auto col-lg-12  hompage-name-describe my-3'>
              <p className='col-lg-12 text-white'>I'm a full stack developer, proficient in HTML,
              CSS, JavaScript for front-end and </p>
              <p className='col-lg-12 text-white'> Node.js, Java for back-end. Eager to learn and create impactful web solutions.</p> 
            </div>

          </div>
          <div className='my-5 text-center'>
            <a href={cv} download>
            <button className='mx-3 home-page-button ps-4 pe-4 '>Download CV</button>
            </a>
            <Link to="/portfolio"><button className='mx-3 home-page-button ps-4 pe-4 '>Portfolio</button></Link>
          </div>
        </div>
        <div className='col-lg-6 text-end '>
          <div className='col-lg-12 text-end '>
            <img src={imag1} className='col-lg-9 text-center  imagee col-10'/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
