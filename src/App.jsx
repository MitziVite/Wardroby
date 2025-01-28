import './App.css';
import UserIcon from './assets/images/user.png';
import PasswordIcon from './assets/images/password.png';
// import FacebookIcon from './assets/images/facebook.png';
// import GoogleIcon from './assets/images/google.png';
import CloudIcon from './assets/images/cloud.png';
import FlowerIcon from './assets/images/flower.png';
import DotIcon from './assets/images/fill-dot-background.png';
import EmptyCircle from './assets/images/empty-circle.png';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { LoginSocialFacebook } from 'reactjs-social-login';
import {  FacebookLoginButton } from "react-social-login-buttons";

function App() {
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
        <form>
          <div className="user-input-container">
              <img src={UserIcon} alt="User Icon" className="user-icon" />
              <input className="username" placeholder="Username" />
            </div>

          <div className='password-input-container'>
          
            <img src={PasswordIcon} alt='Password Icon' className='password-icon' />
          <input className='password' placeholder='Password' />
          </div>
          <p className='forgot-password'><a>Forgot password?</a></p>
          <button className='signIn-button'>Sign In</button>
          <div className="or-sign-with-container">
              <hr className="divider" />
              <p className="or-sign-with">Or sign in with</p>
              <hr className="divider" />
            </div> 
          <div className='social-media-icons'>
          <div className='social-media-square'>
          {/* <img src={FacebookIcon} alt='Facebook Icon' className='facebook-icon' /> */}

          <LoginSocialFacebook
            appId="1185813582892730"
            onResolve={(response) => {
              console.log(response);
              // setProfile(response.data);
            }}
            onReject={(error) => {
              console.log(error);
            }}
            >
            <FacebookLoginButton/>
          </LoginSocialFacebook>

          </div>
          <div className='social-media-square'>
          {/* <img src={GoogleIcon} alt='Google Icon' className='google-icon' /> */}
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