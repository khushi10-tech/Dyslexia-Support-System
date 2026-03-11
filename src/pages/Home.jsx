import "../styles/home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
