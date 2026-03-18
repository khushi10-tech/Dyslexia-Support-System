import "../styles/home.css";
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import VoiceAssistant from "../components/VoiceAssistant";

const Home = () => {
  // 🔊 Welcome voice on load
  useEffect(() => {
    const speak = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    };

    // Delay helps avoid autoplay restriction
    setTimeout(() => {
      speak("Welcome to our website. Click the voice button to start voice assistance.");
    }, 1500);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <div id="features">
        <Features />
      </div>

      <div id="steps">
        <Steps />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <CTA />
      <Footer />

      {/* 🔊 Voice Assistant */}
      <VoiceAssistant />
    </>
  );
};

export default Home;