import React from "react";
import "./Features.css";
import '../../Responsive.css'
import img1 from '../../imges/image 19.png'
import img2 from '../../imges/image 20.png'

const Features = () => {
  return (
    <>
      <div className="Feature-container">
        <div className="row">
          <div className="heading-texts">
            <h1>Caring is the new marketing</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              nesciunt vel
              impedit facere nemo, soluta dicta hic, corrupti sit illum corporis
              ad  illo quia consequatur quisquam ex voluptatibus minus
              doloribus?
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <img
                src={img1}
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
                src={img2}
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
                src={img2}
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
