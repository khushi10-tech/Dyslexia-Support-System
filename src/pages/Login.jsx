import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [soundOn, setSoundOn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSoundToggle = () => {
    setSoundOn(!soundOn);
    if (!soundOn) {
      new Audio("/click.mp3").play();
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo */}
        <div className="logo-box">
          <img src="/brain.png" alt="logo" />
        </div>

        <h1 className="title">LearnSmart</h1>
        <p className="subtitle">AI-Powered Learning for Everyone</p>

        {/* Sound Assistance */}
        <div className="sound-box">
          <span>🔊 Sound Assistance</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={soundOn}
              onChange={handleSoundToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Username */}
        <label className="label">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="input"
        />

        {/* Password */}
        <label className="label">Password</label>
        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="input"
          />
          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁
          </span>
        </div>

        {/* Remember + Forgot */}
        <div className="row">
          <label className="remember">
            <input type="checkbox" /> Remember me
          </label>
          <span className="forgot">Forgot password?</span>
        </div>

        {/* Login Button */}
        <button
          className="login-btn"
          onClick={() => navigate("/avatar")}
        >
          Login to Learn 🚀
        </button>

        <div className="or">or</div>

        <p className="signup">
          Don’t have an account? <span>Sign up for free</span>
        </p>

        <div className="tip">
          💡 Tip: Click the sound icon for audio help with reading
        </div>
      </div>
    </div>
  );
};

export default Login;
