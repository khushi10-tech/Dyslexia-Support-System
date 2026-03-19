import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Signup.css";

export default function Signup() {

  const navigate = useNavigate();

  const avatars = ["😊","🦁","🐼","🦊","🐯","🐸","🦄","🐨","🐷","🐶","🐱","🦉"];

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
    agree: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  // 🔊 Text-to-Speech Function
  const speak = (text) => {
    if (!soundOn) return;

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.9;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const selectAvatar = (avatar) => {
    setFormData({ ...formData, avatar });
    speak("Avatar selected");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      speak("Passwords do not match");
      alert("Passwords do not match");
      return;
    }

    if (!formData.agree) {
      speak("Please accept terms and conditions");
      alert("Please accept terms and conditions");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          avatar: formData.avatar
        }
      );

      speak("Registration successful");
      alert(response.data.message);

      console.log("User Registered:", response.data);

<<<<<<< HEAD
      // Redirect to login after signup
      navigate("/login");

=======
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
>>>>>>> 7ba355db669a8e5b9de5b9a2b3c8e10ab4adc7f5
    } catch (error) {
      console.error(error);
      speak("Signup failed");
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-container">

      <div className="signup-card">

        {/* 🔊 Sound Toggle */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="button"
            onClick={() => setSoundOn(!soundOn)}
            className="sound-btn"
          >
            {soundOn ? "🔊" : "🔇"}
          </button>
        </div>

        {/* Header */}
        <div className="signup-header">
          <h1 onMouseEnter={() => speak("Join Learn Smart")}>
            Join LearnSmart! 🎉
          </h1>
          <p>Start your learning adventure today</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="signup-form">

          {/* Username */}
          <div>
            <label>Choose a Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onFocus={() => speak("Enter your username")}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              onFocus={() => speak("Enter your email address")}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label>Create Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                onFocus={() => speak("Create a strong password")}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                👁
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              onFocus={() => speak("Confirm your password")}
              onChange={handleChange}
            />
          </div>

          {/* Avatar */}
          <div onMouseEnter={() => speak("Choose your avatar")}>
            <label>Pick Your Avatar</label>

            <div className="avatar-grid">
              {avatars.map((avatar, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectAvatar(avatar)}
                  className={`avatar-btn ${
                    formData.avatar === avatar ? "avatar-selected" : ""
                  }`}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onFocus={() => speak("Accept terms and conditions")}
              onChange={handleChange}
            />
            <span>I agree to the Terms and Conditions</span>
          </div>

          {/* Submit */}
          <button type="submit" className="signup-btn">
            Create My Account →
          </button>

          {/* 🔥 Login Redirect Section */}
          <div className="login-section">
            <p>Already have an account? 😊</p>

            <button
              type="button"
              className="login-btn"
              onClick={() => {
                speak("Redirecting to login");
                navigate("/login");
              }}
            >
              Go to Login →
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}