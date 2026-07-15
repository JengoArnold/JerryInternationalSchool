import React, {useState} from 'react'
import './Login.css'
import {
  auth,
  signInWithEmailAndPassword
} from "./Firebase";
function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("Logged in:", userCredential.user);

    alert("Login successful!");

    // Later you can redirect to your dashboard here

  } 
  
  catch (err) {
    console.log(err);
    setError(err.message);
  }
};

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-panel">
          <h1 className=" about-us-title  ">Welcome Back</h1>
          <p className="login-subtitle">Sign in to continue to your account</p>

          <form className="login-form"  onSubmit={handleLogin}>
            <label className="fom-control" htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="form-control"  value={email}
  onChange={(e) => setEmail(e.target.value)} />

            <label className="fom-control" htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="form-control"  value={password}
  onChange={(e) => setPassword(e.target.value)} />
           
{error && <p style={{ color: "red" }}>{error}</p>}

            <button className="btn btn-primary form-control" type="submit">Login</button>

             <p className='signupswitch'>
             Don't have an account? <a href='/signup'>Sign Up</a>
          </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
