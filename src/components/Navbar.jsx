import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">🧠 LearnSmart</div>

      <button
        className="get-started-btn"
        onClick={() => navigate("/login")}
      >
        Get Started 🚀
      </button>
    </nav>
  );
};

export default Navbar;
