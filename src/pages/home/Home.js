import React from 'react'
import './Home.css'
import '../../Responsive.css'
import img from '../../imges/Illustration.png'


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
                <img src={img} alt="home-img" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home