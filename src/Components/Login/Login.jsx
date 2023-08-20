import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "../../FireBase/FireBaseConfig";
import { signInWithPopup } from "firebase/auth";
import Logo from "../../assets/bubble-chat-icon-3d-png.webp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from '../../assets/googleIcon.png';
const Login = () => {
  const [email, setEmail] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");

  const showPassToggle = () => {
    setShowPass(!showPass);
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful login
        const user = result.user;
        console.log("Logged in with Google:", user);
      })
      .catch((error) => {
        // Handle login error
        console.error("Google login error:", error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img className="logo" src={Logo} alt="logo" />
        <div className="login-title">Welcome to ReaL Chat-App</div>
        <div className="login-input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={showPassToggle} className="password-toggle-icon">
            {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>
        <div className="button-sec">
          <button className="login-button" onClick={handleGoogleSignIn}>
            Sign In
          </button>
          <button className="google-login-button" onClick={handleGoogleSignIn}>
Or Signin with <span><img style={{width:'25px'}} src={GoogleIcon} alt="googleicon" /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
