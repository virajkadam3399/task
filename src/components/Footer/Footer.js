import React from 'react'
import './Footer.css'
import '../../Responsive.css'

import logo_footer from '../../imges/digi_logo_dark.png'
const Footer = () => {
    return (
        <footer>
        <div className="img-footer">
        <div className="img-text">
        <h1>Pellentesque suscipit fringilla libero eu.</h1>
        <button>get a demo</button>
        </div>
        </div>
            <div className="row">
                <div className="grid1">
                   <img src={logo_footer} alt="" />
                    <p>copyright © 2020 Nexcent ltd.</p>
                    <p>All rights reserved</p>


                <div className='icon-design'>
                <i style={{width:"32px", height:"32px"}} class="fa-brands fa-instagram"></i>
                <i style={{width:"32px", height:"32px"}} class="fa-brands fa-twitter"></i>
                <i style={{width:"32px", height:"32px"}} class="fa-brands fa-facebook"></i>
                <i style={{width:"32px", height:"32px"}} class="fa-brands fa-youtube"></i>

                </div>
                </div>

              
                <div className="grid2">
                  <div className="grid-first">
                  <h1>Company</h1>
                    <ul>
                        <li>about us</li>
                        <li>Blog</li>
                        <li>contact us</li>
                        <li>pricing</li>
                        <li>testimonial</li>
                    </ul>
                    </div>
                </div>
                <div className="grid-second">
                    <h1>Support</h1>
                    <ul>
                        <li>about us</li>
                        <li>Blog</li>
                        <li>contact us</li>
                        <li>pricing</li>
                        <li>testimonial</li>
                    </ul>
                </div>
                <div className="grid-third">
                    <h1>Stay up to date</h1>
                    <input type="text" placeholder='Your email address' />
                </div>
            </div>
        </footer>
    )
}

export default Footer