import React from "react";
import "./contactus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const ContactForm = () =>{
  const handleclick=()=>{
    alert("For Faster response use any of the social media application");
  }

 
    const clickherewt= () => {
      const phoneNumber = '+917676178241'; // Replace with recipient's phone number
      const message = 'How may i help u '; // Replace with your initial message
      const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
    
      const handleClickln= () => {
        const profileUrl = 'https://www.linkedin.com/in/naveen-kumar-a-b8187a26b/'; // Replace with the LinkedIn profile URL
        const url = `https://www.linkedin.com/inbox/message/compose/?connection=${encodeURIComponent(profileUrl)}`;
        window.open('https://www.linkedin.com/in/naveen-kumar-a-b8187a26b/', '_blank');
      }

      const handleclickins=()=>{
        window.open('https://www.instagram.com/naveen_ku_mar_1','_blank');
      }
  return(
    <>
    <div className="container-fluid contact-us-main pt-5 text-center">
      <div className="container contact-us-main2 bg-white text-black col-lg-6">
        <div className="container mt-5">
        <h1>Contact Me</h1>
        <div className="conatiner mt-5">

          <div className="mt-3 contact-us-div col-lg-5 mx-auto">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Enter your name" className="contact-us-input1" />
          </div>

         <div className="mt-3 contact-us-div col-lg-5 mx-auto">
         <FontAwesomeIcon icon={faEnvelope} />
         <input type="text" placeholder="Enter your email address" className="text-black contact-us-input1"/>
         </div>

         <div className="mt-3 contact-us-div col-lg-5 mx-auto">
         <FontAwesomeIcon icon={faClipboard} />
          <input type="text" placeholder="describe your problem" className="text-black contact-us-input1"/>
         </div>
        </div>

        <button className=" mx-auto  button-login-contact  mt-2 col-lg-5 col-12 "   onClick={handleclick}>Submit</button>
        </div>


        <div className="container mt-5">
          <div className="col-lg-12 col-12">
          <h4>You Can Also Contact Me Through:</h4>
          </div>

           <div className="col-lg-12  row">
          <div className="col-lg-4 col-4">
          <FontAwesomeIcon icon={faLinkedin} onClick={handleClickln} className="instagram-contact "/>
          </div>


          <div className="col-lg-4 col-4">
          <FontAwesomeIcon icon={faWhatsapp} onClick={clickherewt} className="twitter-contact "/>
          </div>

          <div className="col-lg-4 col-4">
          <FontAwesomeIcon icon={faInstagram} onClick={handleclickins} className="facebook-contact"/>
          </div>
          </div> 
          
        </div>
      </div>
    </div>
    </>
  )
}
export default ContactForm;