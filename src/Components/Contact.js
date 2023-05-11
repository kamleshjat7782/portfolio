import React, { useState } from "react";
// import { Link } from "react-router-dom";

function Contact() {

const[formData, setFormData] = useState({
  name     : "",
  email    : "",
  mobileno : "",
  message  : "",
});

const handleInput = (e) =>{
  const name = e.target.name;
  const value = e.target.value;
  console.log(name)

  setFormData((previous) => {
    return{...previous, [name] : value};
  })
}

function submit(){
  const{name, email, mobileno,message} = formData;
  alert(`Hi ${formData.name}, your email id is ${formData.email} and your contact number is ${formData.mobileno}
  and Thank You so much for feedback
  `)
  

}
console.log(formData);

  return (
    <>
   
      <div className="contact">
        <h1>Contact Us </h1>
      </div>

      <div className="contactP">
        <p>
          
          Please get in touch and our expert support team will answer all your
          questions{" "}
        </p>
      </div>

      <div className="contactForm">
        <div className="login-box">
          <h2>Contact Us</h2>
          <form action="">
            <div className="user-box">
              <input type="text" name="name" value={formData.name} onChange={handleInput} placeholder="Name" />
            </div>

            

            <div className="user-box">
              <input type="email" name="email" value={formData.email} onChange={handleInput} id="" required placeholder="Email*" />
            </div>
            <div className="user-box">
              <input type="number" name="mobileno" value={formData.mobileno} onChange={handleInput} id="" required placeholder="Contact No*" />
            </div>
            <div className="user-box">
              <textarea name="message" value={formData.message} onChange={handleInput} id="" cols="32" rows="10" placeholder="Write Your Messages Hear"></textarea>
            </div>

            <div className="submit">
              <button id="submit"  onClick={submit}> Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
