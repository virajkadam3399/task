import React from "react";
import "./Features.css";
import '../../Responsive.css'

const Features = () => {
  return (
    <>
      <div className="Feature-container">
        <div className="row">
          <div className="heading-texts">
            <h1>Caring is the new marketing</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              nesciunt vel <br />
              impedit facere nemo, soluta dicta hic, corrupti sit illum corporis
              ad <br /> illo quia consequatur quisquam ex voluptatibus minus
              doloribus?
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <img
                src="https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg"
                alt="img"
              />
              <div className="card-text">
                <h2>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore doloribus in.
                </h2>
                <button>Readmore {"->"}</button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg"
                alt="img"
              />
              <div className="card-text">
                <h2>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore doloribus in.
                </h2>
                <button>Readmore {"->"}</button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg"
                alt="img"
              />
              <div className="card-text">
                <h2>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore doloribus in.
                </h2>
                <button>Readmore {"->"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
