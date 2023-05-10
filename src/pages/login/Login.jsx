import React, { useRef } from 'react'
import { useFormik } from 'formik';
import { useState } from 'react';
import {SiFirebase} from 'react-icons/si';
import { FaEnvelope, FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaLock, FaTwitter, FaUser } from 'react-icons/fa';

import './login.css';

const Login = () => {
  const [error, setError] = useState("");
  const [signIn, setSignIn] = useState('logreg-box');

  const onSubmit = async(values) => {
    console.log(`Values: ${values}`);
    setError('');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });

  const onClickSignUp = (event) => {
    setSignIn('logreg-box active');
  };
 
  const onClickSignIn = (event) => {
    setSignIn('logreg-box');
  };

  return (
    <>
    <div className="background"></div>
    <div className="container">
      <div className="loginContainer">
        <h2 className='logo'><SiFirebase className='icon' />Firebase</h2>
        <div className="text-sci">
          <h2>Welcome! <br /><span>To Our New Website.</span> </h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, culpa. Voluptate sunt, </p>

          <div className="social-icons">
            <a href="#"><FaLinkedinIn className="icon" /> </a>
            <a href="#"><FaFacebook className="icon" /> </a>
            <a href="#"><FaInstagram className="icon" /> </a>
            <a href="#"><FaTwitter className="icon" /> </a>
          </div>
        </div>
      </div>
      <div className={signIn}>
        <div className="form-box login">
          <form action="#">
            <h2>Sign In</h2>

            <div className="input-box">
              <span className="icon"><FaEnvelope /></span>
              <input type="email" required/>
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon"><FaLock /></span>
              <input type="password" required/>
              <label>Password</label>
            </div>

            <div className="remember-forgot">
              <label><input type="checkbox" />  Remember me</label>
              <a href="#">Forgot password?</a>
            </div>

            <button type='submit' className="btn">Sign In</button>

            <div className="login-register">
              <p>Don't have an accounnt? <a onClick={onClickSignUp} className='register-link'>Sign up</a></p>
            </div>
          </form>
        </div>
        <div className="form-box register">
          <form action="#">
            <h2>Sign Up</h2>

            <div className="input-box">
              <span className="icon"><FaUser /></span>
              <input type="text" required/>
              <label>Name</label>
            </div>

            <div className="input-box">
              <span className="icon"><FaEnvelope /></span>
              <input type="email" required/>
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon"><FaLock /></span>
              <input type="password" required/>
              <label>Password</label>
            </div>

            <div className="remember-forgot">
              <label><input type="checkbox" />  I agree to the terms & conditions</label>
              <a href="#">Forgot password?</a>
            </div>

            <button type='submit' className="btn">Sign </button>

            <div className="login-register">
              <p>Already have an account? <a href="#" onClick={onClickSignIn} className='login-link'>Sign In</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
        /*
        <form onSubmit={formik.handleSubmit}>
          <div className="headingLarge">Login</div>
          <span className="errorText">{error}</span>
          <div className="inputWrapper">
            <input 
              type="email" 
              name="email" 
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder='Email'
              clearOnEscape
              size="large"
            />
          </div>
          <div className="inputWrapper">
            <input 
              type="password" 
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              clearOnEscape
              size="large"
            />
          </div>
          <div className="inputWrapper">
            <button>Login</button>
          </div>
        </form>
         */

export default Login;
