import React from 'react'
import '../assets/Style/Signup.css'
import { useState } from 'react';


export default function Signup() {

  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="App">
        <div className="form-container">
          {isLogin ? (
            <div className='formflex'>
              <div className="form">
                <h1 className='login-head'>Login</h1>
                <form>
                  <div>
                    <label>Email:</label>
                    <input type="email" id="login-email" name="email" required className='login-input' />
                  </div>
                  <div>
                    <label>Password:</label>
                    <input type="password" id="login-password" name="password" required className='login-input'/>
                  </div>
                  <button className="switch-btn" type="submit">Login</button>
                </form>
              </div>
              <div className='switch_form'>
                <h1 className='signup-head'>Hello User </h1>
                <p style={{fontSize:'18px' , margin:'10px'}}>Enter your personal details and start journey with us</p>
                <img src='https://cdn-icons-png.flaticon.com/128/5637/5637217.png' className='sigup-logo'/><br></br> 
                <button className="switch-btn" onClick={handleSwitch}>Sign up</button>
              </div>
            </div>
          ) : (
            <div className="formflex">
               <div className='switch_form2'>
                <h1 className='signup-head'>Welcome Back</h1>
                
                <p style={{fontSize:'20px' , margin:'15px'}}>To stay connected with us please login with your personal details.</p>
                <img src='https://cdn-icons-png.flaticon.com/128/738/738079.png' className='sigup-logo'/><br></br>
                <button className="switch-btn" onClick={handleSwitch}>Login </button>
              </div>
               <div className='form'>
              <h2 className='login-head'>Sign Up</h2>
                <form>
                  <div>
                    <label>Email:</label>
                    <input type="email" id="signup-email" name="email" required className='login-input'/>
                  </div>
                  <div>
                    <label>Password:</label>
                    <input type="password" id="signup-password" name="password" required className='login-input'/>
                  </div>
                  <div>
                    <label>Confirm Password:</label>
                    <input type="password" id="signup-confirm-password" name="confirmPassword" required className='login-input'/>
                  </div>
                  <button className="switch-btn" type="submit">Sign Up</button>
                </form>
              </div>
             
            </div>)}
          {/* <button onClick={handleSwitch}>
            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </button> */}
        </div>
      </div>
    </>
  )
}