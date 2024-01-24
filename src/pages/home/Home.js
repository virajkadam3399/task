import React from 'react'
import './Home.css'
import '../../Responsive.css'


const Home = () => {
  return (
    <>
    <div className="home-container">
        <div className="row">
            <div className="text-content">
                <h1 className='h1'>Lessons and insights <br /> <span>from 8 years</span></h1> 
                <p>Where to grow your business as a photograper, site or social media?</p>
                <button>Register</button>
            </div>
            <div className="img-content">
                <img src="https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg" alt="home-img" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home