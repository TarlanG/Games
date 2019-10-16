import React, { useState } from 'react';
import './App.css';

function App() {
  const [selected, setSelected] = useState("signUp");
  const signUpForm =  <form>
        <h1>Sign Up for Free</h1> 
        <input className="fullname" placeholder="First Name*"  required></input> 
        <input className="fullname" placeholder="Last Name*" style={{float:"right"}} required></input><br></br>
        <input className="input" placeholder="Email Address*" required></input> <br></br>
        <input className="input" placeholder="Set A Password*" required></input><br></br>
        <button onClick={() => console.log({selected})} type="submit" className="bottom" >GET STARTED</button>
     </form>
  const logInForm = <form>
    <h1>Welcome Back!</h1> 
    <input className="input" placeholder="Email Address*" required></input> <br></br>
    <input className="input" placeholder="Password*" required></input><br></br>
    <a href="/">Forgot Password?</a>
    <button  onClick={() => console.log({selected})} type="submit" className="bottom" >LOG IN</button>
  </form>
  return (
    <div className = "box">
      <div className = "container">
        <button onClick={() => setSelected("signUp")} id={ {selected} === "signUp" ? "selected" : "null"} className="top">Sign Up</button> 
        <button onClick={() => setSelected("logIn")} id={ {selected} === "logIn" ? "selected" : "null"}  className="top">Log In</button> <br></br>
           { selected === "logIn" ? logInForm : signUpForm }
      </div>
    </div>
  );
}

export default App;
