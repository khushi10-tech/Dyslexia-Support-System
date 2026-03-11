import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="cta">
      <h2>Ready to start learning?</h2>
      <p>Join thousands of dyslexic learners</p>

      <button
        className="cta-btn"
        onClick={() => navigate("/login")}
      >
        Get Started Free 🚀
      </button>
    </section>
  );
};

export default CTA;
