import React from "react";
import "./Select.css"
import img1 from "../../Image/house1.jpeg"
import img2 from "../../Image/house2.jpeg"
import img3 from "../../Image/house3.jpeg"
import img4 from "../../Image/house4.jpg"
import img5 from "../../Image/house5.jpg"
import img6 from "../../Image/house6.jpg"
import img7 from "../../Image/house7.jpeg"
import img8 from "../../Image/house8.jpeg"


const Select=()=>{
    return(
        <>
        <div className="img-color">
     <h2 className="portfolio-heading"><span className="color-portfolio">In house</span> Portfolio</h2>

        <div className="img-complex">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
            <img src={img7} />
            <img src={img8} />

        </div>
        </div>
        </>
    )
}

export default Select