import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function Avtar() {
  const [selected, setSelected] = useState(avatars[0]);
  const navigate = useNavigate();

  const startLearning = () => {
    // optional: save avatar
    localStorage.setItem("avatar", selected.name);

    navigate("/dashboard"); // or "/home"
  };

  return (
    <div className="avatar-page">
      <div className="avatar-card">
        <div className="top-icon">✨</div>

        <h1>Choose Your Learning Buddy! 🎉</h1>
        <p className="subtitle">Pick an avatar that represents you</p>

        <div className="big-avatar" style={{ background: selected.bg }}>
          <span>{selected.emoji}</span>
        </div>

        <h2 className="avatar-name">{selected.name}</h2>

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

        <div className="buttons">
          <button className="back-btn" onClick={() => navigate("/")}>
            ← Back
          </button>

          <button className="start-btn" onClick={startLearning}>
            Start Learning! 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
