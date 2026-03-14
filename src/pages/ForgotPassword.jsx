import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleReset = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        {
          email,
          newPassword
        }
      );

      alert("Password reset successful");

      navigate("/");

    } catch (error) {

      alert("User not found");

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h2>Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter new password"
          className="input"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleReset}
        >
          Reset Password
        </button>

      </div>

    </div>

  );
}