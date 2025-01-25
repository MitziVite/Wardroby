import './App.css';

function App() {
  return (
    <div className="login-page">
      <p>WELCOME TO</p>
      

      <div className="signIn-main-container">
        <div className="signIn-container">
        <h1>WARDROBY</h1>
        <form>
          <div className='user-input-container'>
            <svg
              className='user-icon'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
            <circle cx="12" cy="8" r="4" />
            <path d="M12 14c-5 0-9 2.5-9 5.5V22h18v-2.5c0-3-4-5.5-9-5.5z" />
            </svg>
            <input className='username' placeholder='Username' />
          </div>

          <div className='password-input-container'>
            <svg className='password-icon'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="white"
            >
            <path d="M12 1C9.243 1 7 3.243 7 6v4H5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V12c0-1.103-.897-2-2-2h-2V6c0-2.757-2.243-5-5-5zm0 2c2.206 0 4 1.794 4 4v4H8V6c0-2.206 1.794-4 4-4zm-1 10h2v6h-2v-6z"/>
            </svg>
            <input className='password' placeholder='Password' />
            </div>
          <p><a>Forgot password?</a></p>
          <button className='signIn-button'>Sign In</button>
          <p>Or sign in with</p>
          <button className='google-button'>Google</button>
          <button className='facebook-button'>Facebook</button>
          <p>Don&apos;t have an account? <a href='#'>Sign Up</a></p>
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;