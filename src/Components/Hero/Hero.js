import React from "react";
import "./Hero.css"

const Hero=()=>{

    return(
        <>
        <div className="bg-color">
        <div className="all-around">
            <div className="input1">
            <div className="part1">
                <div>
                <input type="text" placeholder="Add your Logo" className="border"/>
                </div>
                <div>
                <input type="text" placeholder="Who is this invoice from?(required)" className="access"/>
                </div>
                <div className="flex1">
                    <div className="bill">
                <label>Bill To</label>
                <input type="text" placeholder="Who is this invoice to?(required)"/>
                </div>
                <div className="ship">
                <label>Ship To</label>
                <input type="text" placeholder="(option)"/>
                </div>
                </div>
            </div>

            <div className="part-left">
               <div>
                   <input type="text" placeholder="" className="text1"/>
                   
                </div> 
                <div>
                <input type="text" placeholder="date" className="align"/>
                <input type="text" placeholder="" className="text2"/>
                </div>
                <div>
                <input type="text" placeholder="Payment terms" className="align"/>
                    <input type="text" className="text3"/>
                </div>
                <div>
                <input type="text" placeholder="Due Date " className="align"/>
                    <input type="text" className="text4"/>
                </div>
                <div>
                <input type="text" placeholder="PO Number" className="align"/>
                    <input type="text" className="text4"/>
                </div>
                </div>
            </div>

            <div className="bg-variety">
                <div className="variety">
                <div>
                    <h4 className="item">Item</h4>
                </div>
                <div className="price">
                    <h4>Quantity</h4>
                    <h4>Rate</h4>
                    <h4>Amount</h4>
                </div>
                </div>
            </div>

            

<div className="bottom-part">
<div className="input-left">
<div className="btn-text">
    <div>
                    <input type="text" placeholder="Description of Service or product" className="description"/>
                    <div>
                    <button className="btn-line">+ Line Item</button>
                    </div>
                    </div>
                    <div className="combine">
                 
                </div>
                </div>
<div className="note-part">
    <input type="text" placeholder="Note" className="text-note"/>
    <input type="text" placeholder="Note-Any relevant information not already covered" className="terms"/>
</div>
<div className="note-part">
<input type="text" placeholder="Terms" className="text-note"/>
    <input type="text" placeholder="Term and Condition-Late fees payment methods,delivery schedule" className="terms" /> 
</div>
</div>

<div className="input-right">
    <div className="onward">
<div>
                <input type="text"  value="1" className="value1"/>
                </div>
                <div>
                <input type="text"  value="$0.00" className="value2"/>
                </div>
                </div>
    <div className="total">
        <input type="text" placeholder="subtotal"/>
        <p>$0.00</p>
    </div>
    <div className="tax">
    <input type="text" placeholder="Tax" className="tax-place"/>
    <input type="text" value="0%" className="tax-content"/>
    </div>
    <div className="addition">
        <p>+ Discount</p>
        <p>+ Shipping</p>
    </div>

    <div>
    <div className="subtotal-2"  >
        <input type="text" placeholder="total"/>
        <p>$0.00</p>
    </div> 
    <div className="value2">
    <input type="text" placeholder="Amount Paid" className="payment"/>
    <input type="text" value="0%" className="payment-value"/>
    </div>
    <div className="balance">
        <p>Balance Due</p>
        <p>0.00</p>
    </div>
    </div>

</div>



</div>

        </div>
        </div>
        </>
    )
}
export default Hero