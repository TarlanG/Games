import React, { useState } from 'react';
import './App.css';

function App() {
  const [selected, setSelected] = useState("Signup");

  return (
    <div className = "box">
      <div className = "container">
      <button className="top" onClick={selectedButton="signUp"}>Sign Up</button> 
      <button className="top" onClick={selectedButton="logIn"}>Log In</button> <br />
      <form>
      <h1>Sign Up for Free</h1> 
      <input className="fullname" placeholder="First Name*"  name="firstname" required></input> 
      <input className="fullname" placeholder="Last Name*" name="lastname" style={{float:"right"}} required></input><br></br>
      <input placeholder="Email Address*" name="email" required></input> <br></br>
      <input placeholder="Set A Password*" name="password" required></input><br></br>
      <button type="submit" className="bottom" style={{marginTop: "50px"}}>GET STARTED</button>
      </form>
      </div>
    </div>
  );
}

export default App;
