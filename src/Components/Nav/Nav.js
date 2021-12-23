import React from "react"
 import  "./Nav.css"



const Nav=()=>{
    return(
        <div className="account">
            <div className="account-btn">
                <div className="btn-login">
            <button><a href="#">Login</a></button>
            </div>
            <div className="btn-register">
            <button><a href="#">Register</a></button>
            </div>
            </div>
             <div className="heading-sky">
            <h2><span className="sky">SKYGO</span>.com</h2>
            </div>
       

<div className="list-item">
            <ul className="main-menu">
                <li className="buy"><a href="#">BUY</a>
                <ul className="sub-menu">
                    <li>Search All Listing</li>
                    <li>For Sale by owner</li>
                    <li>For sale by Agent</li>
                    <li>Recently Listed</li>
                </ul>
                </li>
                

                <li className="sell"><a href="#">SELL</a>
                <ul className="sell-products">
                    <li>Post home for Sale</li>
                    <li>For Sale by owner</li>
                    <li>For Sale by Agent</li>
                    <li>For Sale by Network</li>
                </ul>
                </li>
                <li className="rent"><a href="#">RENT</a>
                <ul className="rent-items">
                    <li>Recently Listed</li>
                    <li>Renting Safety</li>
                </ul>
                </li>

                <li className="agents"><a href="#">AGENTS</a>
                <ul className="agents-info">
                    <li>Buyer Leads</li>
                    <li>Advertise</li>
                </ul>
                </li>
                <li className="advice"><a href="#">ADVICE</a>
                <ul className="advice-comments">
                    <li>Currency</li>
                    <li>Legal</li>
                    <li>Mortgages</li>
                    <li>Removals</li>
                </ul>
                </li>

                <li className="news"><a href="#">NEWS</a>
                <ul className="updates">
                    <li>International Property</li>
                    <li>News</li>
                </ul>
                </li>
                <li className="blog"><a href="#">BLOG</a>
                <ul className="blog-property">
                    <li>Submit Guest Post</li>
                    <li>Property Blog</li>
                </ul>
                </li>
            </ul>
            </div>
            

        
            

        </div>
    )
}


export default Nav