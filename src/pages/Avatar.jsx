import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Avtar.css";

const avatars = [
  { id: 1, emoji: "🦁", name: "Lion", bg: "#FFA500" },
  { id: 2, emoji: "🐼", name: "Panda", bg: "#BFC3C7" },
  { id: 3, emoji: "🦊", name: "Fox", bg: "#FF9F7A" },
  { id: 4, emoji: "🐨", name: "Koala", bg: "#BFD4EF" },
  { id: 5, emoji: "🦄", name: "Unicorn", bg: "#F4B2E1" },
  { id: 6, emoji: "🐸", name: "Frog", bg: "#6BE39A" },
  { id: 7, emoji: "🦉", name: "Owl", bg: "#F4C28B" },
  { id: 8, emoji: "🐬", name: "Dolphin", bg: "#8FD3FF" },
  { id: 9, emoji: "🦋", name: "Butterfly", bg: "#E07BEB" },
  { id: 10, emoji: "🐝", name: "Bee", bg: "#FFD76A" },
  { id: 11, emoji: "🦖", name: "Dino", bg: "#9BD27D" },
  { id: 12, emoji: "🐙", name: "Octopus", bg: "#B494FF" },
];

export default function Avatar() {

  const [selected, setSelected] = useState(avatars[0]);
  const navigate = useNavigate();

  const startLearning = async () => {

    try {

      // 🔥 Get logged-in user
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("User not logged in");
        return;
      }

      // 🔥 API CALL to save avatar in DB
      const res = await axios.post(
        "http://localhost:5000/api/auth/update-avatar",
        {
          userId: user._id,
          avatar: selected.emoji   // you can also store name if you want
        }
      );

      if (res.data.success) {

        // 🔥 Update localStorage user
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // 🔥 Go to dashboard
        navigate("/dashboard");

      } else {
        alert("Failed to save avatar");
      }

    } catch (error) {

      console.error(error);
      alert("Error saving avatar");

    }

  };

  return (
    <div className="avatar-page">
      <div className="avatar-card">

        <div className="top-icon">✨</div>

        <h1>Choose Your Learning Buddy! 🎉</h1>
        <p className="subtitle">Pick an avatar that represents you</p>

        {/* BIG AVATAR */}
        <div className="big-avatar" style={{ background: selected.bg }}>
          <span>{selected.emoji}</span>
        </div>

        <h2 className="avatar-name">{selected.name}</h2>

        {/* AVATAR GRID */}
        <div className="avatar-grid">
          {avatars.map((a) => (
            <div
              key={a.id}
              className={`avatar-item ${
                selected.id === a.id ? "active" : ""
              }`}
              style={{ background: a.bg }}
              onClick={() => setSelected(a)}
            >
              <span>{a.emoji}</span>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="buttons">

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            ← Back
          </button>

          <button
            className="start-btn"
            onClick={startLearning}
          >
            Start Learning! 🚀
          </button>

        </div>

      </div>
    </div>
  );
}