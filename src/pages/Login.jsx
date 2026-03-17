import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  // -------------------------
  // Text to Speech Function
  // -------------------------
  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
  };

  // -------------------------
  // Toggle Sound Assistant
  // -------------------------
  const handleSoundToggle = () => {
    const newState = !soundOn;
    setSoundOn(newState);

    if (newState) {
      speakText(
        "Welcome to LearnSmart. Please enter your username or email and password to login."
      );
    }
  };

  // -------------------------
  // Login Function
  // -------------------------
  const handleLogin = async () => {

    if (!identifier || !password) {
      alert("Please enter username or email and password");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          identifier,
          password
        }
      );

      if (response.data.success) {

        const userData = response.data.user;

        console.log("Login Success:", userData);

        // Save user in localStorage
        localStorage.setItem("user", JSON.stringify(userData));

        if (soundOn) {
          speakText("Login successful. Redirecting to avatar selection.");
        }

        // ✅ ALWAYS go to avatar page (as you want)
        navigate("/Avatar");

      } else {
        alert(response.data.message);
      }

    } catch (error) {

      console.error(error);

      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Server error. Please try again.");
      }

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

        {/* Username or Email */}
        <label className="label">Username or Email</label>

        <input
          type="text"
          placeholder="Enter username or email"
          className="input"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          onFocus={() =>
            soundOn && speakText("Enter your username or email")
          }
        />

        {/* Password */}
        <label className="label">Password</label>

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() =>
              soundOn && speakText("Enter your password")
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
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

          <span
            className="forgot"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </span>

        </div>

        {/* Login Button */}
        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login to Learn 🚀
        </button>

        <div className="or">or</div>

        <p className="signup">
          Don’t have an account?{" "}
          <Link to="/signup">Sign up for free</Link>
        </p>

        <div className="tip">
          💡 Tip: Enable sound assistance for audio guidance
        </div>

      </div>

    </div>

  );
};

export default Login;