import "./Login.css";

import Naresh from "../Logo.png";
import { useState } from "react";

import Cookies from "js-cookie";

import { FiEye } from "react-icons/fi";

import { FiEyeOff } from "react-icons/fi";



const Login = (props) => {
  const [username, SetUserName] = useState("");
  const [password, SetPassword] = useState("");
  const [Error, setError] = useState("");
  const [Status, SetStatus] = useState(false);

  const UpdateUserName = (e) => {
    if (e.target.value === "Sri Varahi") {
      SetUserName("rahul");
    }
  };
  const IsActive = () => {
    SetStatus(!Status);
  };
  const UpdatePassword = (e) => {
    if (e.target.value === "9959361690") {
      SetPassword("rahul@2021");
    }
  };

  const LoginDetils = async () => {
    const New = {
      username,
      password,
    };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(New),
    };
    const Responce = await fetch(url, options);

    const Code = await Responce.json();

    if (Responce.ok) {
      SuccesfulPush(Code.jwt_token);
    } else {
      Failure(Code.error_msg);
    }
  };
  const SuccesfulPush = (JWT) => {
    Cookies.set("Token", JWT, {expires:360,
      path: "/",
    });
    const { history } = props;
    history.push("/");
  };

  const Failure = (Err_Msg) => {
    setError(`*${Err_Msg}`);
  };

  return (
    <div className="signin">
      <img src={Naresh} alt="logo" className="LoginLogo" />
      <div className="content">
        <h2>Sign In</h2>
        <div className="form">
          <div className="inputBox">
            <i>Username</i>
            <input
              type="text"
              placeholder="Enter your Username"
              required
              onChange={UpdateUserName}
            />
          </div>
          <div className="inputBox">
            <i>Password</i>
            <input
              type={Status ? "Text" : "password"}
              placeholder="password"
              required
              onChange={UpdatePassword}
            />
          </div>
          {Status ? (
            <FiEye onClick={IsActive} />
          ) : (
            <FiEyeOff onClick={IsActive} />
          )}

          <div className="inputBox">
            <button onClick={LoginDetils}>LogIn</button>
          </div>
        </div>
      </div>
      <p className="Warningss">{Error}</p>
    </div>
  );
};

export default Login;
