import '../styles/Login.css';
import  { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import UserIcon from '../assets/images/user.png';
import PasswordIcon from '../assets/images/password.png';
import CloudIcon from '../assets/images/cloud.png';
import FlowerIcon from '../assets/images/flower.png';
import DotIcon from '../assets/images/fill-dot-background.png';
import EmptyCircle from '../assets/images/empty-circle.png';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name: username,
        email,
        password,
        provider: 'manual',
        picture: '',
      });
      console.log('User created successfully:', response.data);
      setMessage('User created successfully');
      // Handle successful registration (e.g., redirect to login page)
      navigate('/home');
    } catch (error) {
      console.error('Error creating user:', error.response.data);
      setMessage('Error creating user');
      // Handle error (e.g., show error message to user)
    }
  };

  const handleGoogleSuccess = async (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      const { name, email, picture } = decoded;
      const res = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password: '', // No password for OAuth
        provider: 'google',
        picture,
      });
      console.log('User created successfully:', res.data);
      setMessage('User created successfully');
      // Handle successful registration (e.g., redirect to login page)
      navigate('/home');
    } catch (error) {
      console.error('Error creating user with Google:', error.response ? error.response.data : error.message);
      setMessage('Error creating user with Google');
      // Handle error (e.g., show error message to user)
    }
  };

  const handleFacebookSuccess = async (response) => {
    try {
      console.log('Facebook response:', response); // Log the Facebook response
      const { name, email, picture } = response.data;
      const pictureUrl = picture?.data?.url || ''; // Safely access picture URL
      const res = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password: '', // No password for OAuth
        provider: 'facebook',
        picture: pictureUrl,
      });
      console.log('User created successfully:', res.data);
      setMessage('User created successfully');
      // Handle successful registration (e.g., redirect to login page)
      navigate('/home');
    } catch (error) {
      console.error('Error creating user with Facebook:', error.response ? error.response.data : error.message);
      setMessage('Error creating user with Facebook');
      // Handle error (e.g., show error message to user)
    }
  };


  return (
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
                  <h1 className='global-title'>WARDROBY</h1>
    <div className="signup-container">
      <form onSubmit={handleSignUp}>
        <div className="user-input-container">
          <img src={UserIcon} alt="User Icon" className="user-icon" />
          <input
            className="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="email-input-container">
          <img src={UserIcon} alt="Email Icon" className="email-icon" />
          <input
            className="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-input-container">
          <img src={PasswordIcon} alt="Password Icon" className="password-icon" />
          <input
            className="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='signIn-button' type="submit">Sign Up</button>
      </form>
      <div className="or-sign-with-container">
        <div className="divider"></div>
        <div className="or-sign-with">or sign up with</div>
        <div className="divider"></div>
      </div>
      <div className="social-media-icons">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => console.error('Google login error')}
        />
        <LoginSocialFacebook
          appId={import.meta.env.VITE_FACEBOOK_APP_ID}
          onResolve={handleFacebookSuccess}
          onReject={(error) => console.error('Facebook login error:', error)}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>
      {message && <p>{message}</p>}
      <p className='no-account'>Already have an account? <Link to="/">Sign Up</Link></p>
    </div>
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
};

export default SignUp;