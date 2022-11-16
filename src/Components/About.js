import React from 'react'
import about from '../Assets/Images/2.png'
import Home from './Home';


function About() {
  return (
    <>
    <Home name = "About Us" 
    page = ""
    
    />
    <div className="about">
      <div className="img">
      <img src={about} alt="img" />
      </div>
      <div className="about-cont">
        <h3>About Me</h3>
        <h1>Web Developer </h1>
        <h4>A passionate UI/UX Designer and Web Developer </h4>
        <p>Hi! My name is Kamlesh Choudhary. I am Web Developer, and I'm very passionate and dedicated to my work. With 1 years experience as a professional Web Development, I have acquired the skills and knowledge necessary to make your project a success.</p>

        <button>Downlode CV</button>

      </div>
    </div>
    </>
  )
}

export default About;