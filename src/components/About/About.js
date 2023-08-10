import React from 'react'
import "./about.css";
import imgabout from "./11-removebg-preview.png";
import Typewriter from 'typewriter-effect'; 

export default function About() {
  return (
    <>
    <div className='conatiner-fluid about-main-div'>
      <div className='bg-black text-white '>
        <p className='text-center fs-1 about-me'> <Typewriter
                      options={{
                        strings: ['About Me'],
                        autoStart: true,
                        loop: true,
                      }}
                      /></p>
      </div>

      <div className='container row'>
        <div className='col-lg-6 text-center'>
          <img className='col-lg-8 pb-5' src={imgabout}/>
        </div>
        <div className='col-lg-6 text-start pt-5 about-mr-desc'>
          <p className='pt-5 text-white'>
          As a beginner MERN (MongoDB, Express.js, React.js, Node.js) Full Stack Developer, I possess a versatile skill set that empowers me to craft dynamic and engaging web applications. With a deep understanding of each component in the MERN stack, 
            I proficiently handle database management using MongoDB, create efficient and scalable server-side logic with Express.js, and construct visually appealing and responsive user interfaces using React.js.
          </p>
          <p className='pt-3 text-white'>
          My proficiency in JavaScript allows me to seamlessly integrate frontend and backend functionalities, enabling me to develop complete and modern web experiences. I am well-versed in RESTful API design, user authentication, and data manipulation, ensuring smooth data flow and user interactions. I'm committed to continuous learning, staying updated with the latest industry trends, and expanding my expertise to ensure I deliver high-quality and innovative solutions. As a MERN Full Stack Developer, I'm eager to contribute my skills to create user-centric, feature-rich, and seamless web applications.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

