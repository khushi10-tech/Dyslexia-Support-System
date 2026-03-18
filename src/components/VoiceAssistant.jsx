import { useEffect, useRef, useState } from "react";

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // 🔊 Speak function
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.log("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const command =
        event.results[event.results.length - 1][0].transcript.toLowerCase();

      console.log("Command:", command);

      // 🎤 Commands
      if (command.includes("scroll down")) {
        window.scrollBy({ top: 500, behavior: "smooth" });
        speak("Scrolling down");
      }

      if (command.includes("scroll up")) {
        window.scrollBy({ top: -500, behavior: "smooth" });
        speak("Scrolling up");
      }

      if (command.includes("go to top")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        speak("Going to top");
      }

      if (command.includes("features")) {
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
        speak("Opening features section");
      }

      if (command.includes("steps")) {
        document.getElementById("steps")?.scrollIntoView({ behavior: "smooth" });
        speak("Opening steps section");
      }

      if (command.includes("testimonials")) {
        document
          .getElementById("testimonials")
          ?.scrollIntoView({ behavior: "smooth" });
        speak("Opening testimonials");
      }
    };

    recognitionRef.current = recognition;
  }, []);

  // ▶️ Start Listening
  const startListening = () => {
    recognitionRef.current?.start();
    setIsListening(true);
    speak("Voice assistant activated");
  };

  // ⏹ Stop Listening
  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
    speak("Voice assistant stopped");
  };

  return (
    <div style={styles.container}>
      <button
        onClick={isListening ? stopListening : startListening}
        style={{
          ...styles.button,
          backgroundColor: isListening ? "#ff4d4d" : "#4CAF50",
        }}
      >
        {isListening ? "Stop Voice" : "Start Voice"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
  },
  button: {
    padding: "12px 18px",
    borderRadius: "30px",
    border: "none",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default VoiceAssistant;