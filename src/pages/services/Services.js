import React from "react";
import "./Services.css";

import '../../Responsive.css'

const Services = () => {
  return (
    <>
      <div className="services-container">
        <div className="section">
        <div className="row-first">
          <div className="img-services">
            <img
              src="https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg"
              alt="service-img"
            />
</div>
          <div className="text-context">
            <h1>
              The unseen of spending three <br /> years at PixleGrade
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Iste ratione dicta laborum
              quibusdam labore repellendus ipsam fuga, odio quasi, debitis optio
              nulla dignissimos voluptatem eligendi accusamus in mollitia? Ut,
              rem!{" "}
            </p>
            <button>Learn More</button>
          </div>
          
        </div>

        <div className="row-second">
          <div className="text-context">
            <h1>
              How to design your site footer like <br />we did
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Iste ratione dicta laborum
              quibusdam labore repellendus ipsam fuga, odio quasi, debitis optio
              nulla dignissimos voluptatem eligendi accusamus in mollitia? Ut,
              rem!{" "}
            </p>
            <button>Learn More</button>
          </div>
          <div className="img-services">
            <img
              src="https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg"
              alt="service-img"
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Services;
