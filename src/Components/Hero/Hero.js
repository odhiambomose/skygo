import React from "react";
import "./Hero.css";

import img1  from  "../../Image/Ams-Properties.jpg";
import img2  from  "../../Image/Corol-properties.jpg";
import img3  from  "../../Image/huts-and-homes.jpg";
import img4  from  "../../Image/sepal-garnet.jpg";
import img5  from  "../../Image/shady-acres.jpg";
import img6  from  "../../Image/Shaza.jpg";






const Hero=()=>{
    return(
        <div className="hero-container">
            <h2>Our Partners</h2>
            <p>We only work with the best companies around the globe</p>

            <div className="partner">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
                <img src={img5} />
                <img src={img6} />
            </div>

            
            <h2>Become a Skygo.com Agent</h2>
            <p>We only work with the best companies around the globe</p>
            <button>Register Now</button>
            


        </div>
    )
}


export default Hero