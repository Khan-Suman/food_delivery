import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setShowLogIn}) => {
const [currState,setCurrentState] = useState("Sign up")
  return (   
    <div className='logInPopUp'>
    <form className='login-popup-container'>
    <div className='login-popup-title'>
      <h2>{currState}</h2>
      <img onClick={()=>setShowLogIn(false)} src={assets.cross_icon} alt='' />
      </div>
      <div className='login-popup-inputs'>
        {currState === "Sign Up" ?<input type='text' placeholder='Your name' required />:<></> }
        <input type='email' placeholder='Your email' required/>
        <input type='password' placeholder='Password' required />
      </div>
      <button>{currState==="Sign Up" ? "Create account" : "Login"}</button>
      <div className='login-popup-condition'>
        <input type='checkbox' required />
        <p>By continuing, I agree to the terms of use & privacy poplicy</p>
      </div>
      {currState === "Login"
      ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
      :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span> </p>}
      </form>
    </div>
  )
}

export default LoginPopup