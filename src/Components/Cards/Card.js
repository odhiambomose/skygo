import React from "react"
import "./Card.css"


const Card=()=>{
    return(
<div className="bg-explanation">
    <div className="explanation">
        <div>
        <h2>Free invoice Template</h2>
        </div>
        <div>
        <p className="paragraph">Make beutiful invoice with one click!</p>
        </div>
        <div>
        <p className="content">Welcome to the original invoice generater,trusted by million people.Invoice Generator lets you quickly make invoice with our attractive invoice template straight from your web browser,no sign up necessary.The invoice you make can be sent and paid online as a PDF</p>
        </div>
        <div>
        <p className="mention">Did we also mention that invoice Genarator lets you generate an unlimited number of invoice?</p>
        </div>
        <div className="btn-content">
        <button>Ok,got it!</button>
        <p>Read the Docs</p>
        </div>
    </div>
</div>
    )
}
export default Card