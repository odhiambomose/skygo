import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import "./Slide.css"

const Slide = () => {
    return (
        <div className="slide-container">

<div id="carouselExampleSlidesOnly" className="carousel slide slider" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active slide1">
      
    </div>
    <div className="carousel-item slide2">
      
    </div>
    <div className="carousel-item slide3">
      
    </div>
  </div>
</div>



<div className="slide-text">
    <div className="text">
            <h1>Welcome!Find Your Home</h1>
            <p>We will help you find a property with ease</p>
            </div>

            <div className="choice">
                <div>
                    <button>For Rent</button>
                </div>
                <div>
                    <button>For Sale</button>
                </div>
            </div>


            <div className="btn-container">
                <div>
                    <button>Buy</button>
                </div>
                <div>
                    <button>Rent</button>
                </div>
                <div>
                    <button>Sold</button>
                </div>
                <div>
                    <button>Property value</button>
                </div>
                <div>
                    <button>Find agents</button>
                </div>
            </div>

            <div className="style">

                <div>
                    <input type="Search" />
                </div>
                {/* <div>
                    < SearchIcon />
                </div> */}
            </div>
            </div>



        </div>
    )
}


export default Slide