import React from "react";
import img from "../Assets/Images/img.png";
import Home from "./Home";

function Project() {
  return (
    <>
    <Home 
    page = ""
    name = "Projects"
    />
      <section>
        <div className="service-containet ">
          <h1>Projects </h1>
          
        </div>
        <div className="service">
          <div className="service-list">
            <h3>Web Developmant </h3>
            <img src={img} alt="img" />
            <div>
              <p>
                Product development at any stage and ongoing support after you
                launch.
              </p>
            </div>
            <button>Read more</button>
          </div>
          <div className="service-list">
            <h3>Kamlesh Choudhary </h3>
            <img src={img} alt="img" />
            <div>
              <p>
                Product development at any stage and ongoing support after you
                launch.
              </p>
            </div>
            <button>Read more</button>
          </div>
          <div className="service-list">
            <h3>Web App Developmant </h3>
            <img src={img} alt="img" />
            <div>
              <p>
                Product development at any stage and ongoing support after you
                launch.
              </p>
            </div>
            <button>Read more</button>
          </div>
          </div>
      </section>
    </>
  );
}

export default Project;
