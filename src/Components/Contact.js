import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

function Contact() {
  return (
    <>
    <Home 
    page = ""
    name ="Contact With Us"
    />
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
              <input type="text" name="" required placeholder="Name" />
            </div>
            <div className="user-box">
              <input type="email" name="" id="" required placeholder="Email*" />
            </div>
            <div className="user-box">
              <input type="number" name="" id="" required placeholder="Contact No*" />
            </div>
            <div className="user-box">
              <textarea name="text" id="" cols="32" rows="10" placeholder="Write Your Messages Hear"></textarea>
            </div>

            <div className="submit">
              <Link to ="/" id="submit">
                submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
