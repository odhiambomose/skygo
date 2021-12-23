// import React from "react"
import "./LogIn.css"
import React, { useState } from "react";


import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';






    const LogIn=()=>{

        const [Password, setPassword]=useState("");
        const [confirmPassword,setConfirmPassword]=useState("");
    
        function onchangePassword(e){
            const enterPassword=e.target.value;
            setPassword(enterPassword)
    
        }
    
        function onClickPassword(e){
            const putPassword=e.target.value;
            setConfirmPassword(putPassword)
        }
    
        const renderIcon=()=>{
            if(confirmPassword!==""){
                return Password===confirmPassword ? < CheckOutlinedIcon style={{color:"green"}}/>:<ClearOutlinedIcon style={{color:"red"}} />
            }
        }
    
    return(
        <div className="login-info">
            
            <h2>Log in with Google</h2>
              <div>
            <input type="text" placeholder="Login with google" /> 
            </div>
            
            <div>
            <label>First Name</label>
            <input type=" " />
            
            <label>Last Name</label>
            <input  onChange={onchangePassword} type=" " />
    
            </div>

            <div>
            <label>Password</label>
            <input   type="" type="password" />
            <label>Confirm Password</label>
            <input  onChange={onClickPassword} type=""  type="password" />
            </div>
<div>
{renderIcon()}
</div>

            <div>
            <button>Login</button>
            </div>
            <div className="box">
                <div>
            <input type="checkbox"  placeholder="checkbox" />
            </div>
            <div>
            <p>Forgot your Password</p>
            </div>
            </div>
            
            
            <button>Create Account</button>
            

        </div>
    )
}

export default LogIn;