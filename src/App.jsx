import './App.css';
import UserIcon from './assets/images/user.png';
import PasswordIcon from './assets/images/password.png';
import CloudIcon from './assets/images/cloud.png';
import FlowerIcon from './assets/images/flower.png';
import DotIcon from './assets/images/fill-dot-background.png';
import EmptyCircle from './assets/images/empty-circle.png';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { LoginSocialFacebook } from 'reactjs-social-login';
import {  FacebookLoginButton } from "react-social-login-buttons";

import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        console.log(data.user);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };

  return (
    // const [profile, setProfile] = useState(null);
    <div className="login-page">
      <img className='clouds' src={CloudIcon} alt="cloud-icon" />
      <img className='flowers' src={FlowerIcon} alt="flower-icon" />
      <img className='dots' src={DotIcon} alt="dot-icon" />
      <img className='dots-two' src={DotIcon} alt="dot-icon" />
      <img className='dots-three' src={DotIcon} alt="dot-icon" />
      <img className='dots-four' src={DotIcon} alt="dot-icon" />
      <img className='dots-five' src={DotIcon} alt="dot-icon" />
      <img className='empty-circle' src={EmptyCircle} alt="empty-circle" />
      <div className="main-container-login">
      <div className='welcome-container'>
      <p>WELCOME TO</p>
      </div>

      <div className="signIn-main-container">
        <div className="signIn-container">
        <h1>WARDROBY</h1>
        <form onSubmit={handleLogin}>
          <div className="user-input-container">
              <img src={UserIcon} alt="User Icon" className="user-icon" />
              <input
                  className="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
            </div>

          <div className='password-input-container'>
            <img src={PasswordIcon} alt='Password Icon' className='password-icon' />
            <input
                  className='password'
                  placeholder='Password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
          </div>
          <p className='forgot-password'><a href="#">Forgot password?</a></p>
          <button className='signIn-button'>Sign In</button>
          {message && <p>{message}</p>}
          <div className="or-sign-with-container">
              <hr className="divider" />
              <p className="or-sign-with">Or sign in with</p>
              <hr className="divider" />
            </div> 
          <div className='social-media-icons'>
          <div className='social-media-square'>

          <LoginSocialFacebook
            appId={import.meta.env.VITE_FACEBOOK_APP_ID}
            onResolve={(response) => {
              console.log(response);
            }}
            onReject={(error) => {
              console.log(error);
            }}
            >
            <FacebookLoginButton/>
          </LoginSocialFacebook>

          </div>
          <div className='social-media-square'>
    
          <GoogleLogin
            onSuccess={credentialResponse => {
              const credentialResponseDecoded = jwtDecode(
                credentialResponse.credential
                );
              console.log(credentialResponseDecoded);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            />
          </div>
          </div>
          <p className='no-account'>Don&apos;t have an account? <a href='#'>Sign Up</a></p>
        </form>
        </div>
      </div>
      </div>
      <div className="flowers-bottom">
        <img src={FlowerIcon} alt="Flower" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="vertical-line-one lines"></div>
      <div className="vertical-line-two lines"></div>
      <div className="vertical-line-three lines"></div>
      <div className="vertical-line-four lines"></div>
      <div className="vertical-line-five lines"></div>
      <div className="vertical-line-six lines"></div>
      <div className="vertical-line-seven lines"></div>
    </div>
  );
}

export default App;