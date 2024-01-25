import React from "react";
import "./Services.css";
import '../../Responsive.css'
import img from '../../imges/rafiki.png'
import pana from '../../imges/pana.png'

const Services = () => {
  return (
    <>
      <div className="services-container">
        <div className="section">
        <div className="row-first">
          <div className="img-services">
            <img
              src={img}
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
              src={pana} alt="pana"
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Services;
