import './Login.css'

import Naresh from '../Logo.png';
import { useState } from 'react';


import Cookies from 'js-cookie';



const Login = (props) => {
  const [username,SetUserName]=useState('')
  const[password,SetPassword]=useState("")
  const [Error,setError]=useState("")


  const UpdateUserName=(e)=>{
    if(e.target.value==="Naresh"){
      SetUserName("rahul")
    }
  }

  const UpdatePassword=(e)=>{
    if(e.target.value==="NRFarm"){
      SetPassword("rahul@2021")
    }
  }

  const LoginDetils=async()=>{
    const New={
      username,
      password
    }
    const url = 'https://apis.ccbp.in/login'
    const options={
      method:"POST",
      body:JSON.stringify(New)
    }
    const Responce= await fetch(url,options)

    const Code=  await Responce.json()
  
    
    if(Responce.ok){
      SuccesfulPush(Code.jwt_token)
    }else{
      Failure(Code.error_msg)
    }
  };
    const SuccesfulPush = (JWT) => {
      Cookies.set("Token", JWT, {
        path: "/"
      });
      const {history}=props
      history.push("/")
    };

    const Failure = (Err_Msg) => {
      setError(`*${Err_Msg}`);
    };



    
 
 
    return (
      <div className="signin"> 
      <img src={Naresh} alt="logo" className='LoginLogo'/>
        <div className="content"> 
          <h2>Sign In</h2> 
          <div className="form"> 
            <div className="inputBox">
            <i>Username</i>  
              <input type="text" placeholder='Enter your Username' required onChange={UpdateUserName}/> 
            </div> 
            <div className="inputBox"> 
            <i>Password</i> 
              <input type="password" placeholder='password' required  onChange={UpdatePassword} /> 
            </div> 
        
            <div className="inputBox"> 
             <button onClick={LoginDetils}>LogIn</button>
            </div> 
           
          </div> 
        </div> 
        <p className='Warningss'>{Error}</p>
      </div> 
    );
  }
  
  export default Login;
  