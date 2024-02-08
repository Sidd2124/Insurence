import './Login.css'

import Naresh from '../Logo.png';

const Login = () => {
    return (
      <div className="signin"> 
      <img src={Naresh} alt="logo" className='LoginLogo'/>
        <div className="content"> 
          <h2>Sign In</h2> 
          <div className="form"> 
            <div className="inputBox">
            <i>Username</i>  
              <input type="text" required /> 
            </div> 
            <div className="inputBox"> 
            <i>Password</i> 
              <input type="password" required /> 
            </div> 
        
            <div className="inputBox"> 
              <input type="submit" value="Login" /> 
            </div> 
          </div> 
        </div> 
      </div> 
    );
  }
  
  export default Login;
  