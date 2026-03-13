import { useState } from "react";

export default function PronunciationGame() {

const word = "apple";
const [result,setResult] = useState("");

const startListening = () => {

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.start();

recognition.onresult = (event) => {

const spoken = event.results[0][0].transcript.toLowerCase();

if(spoken.includes(word)){
setResult("✅ Correct pronunciation!");
}
else{
setResult("❌ Try again");
}

};

};

return (

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
AI Pronunciation Game
</h1>

<p className="mb-4">
Say this word aloud:
</p>

<h2 className="text-2xl mb-4">{word}</h2>

<button
onClick={startListening}
className="bg-purple-600 text-white px-4 py-2 rounded"
>
Start Speaking
</button>

<p className="mt-4">{result}</p>

</div>

);

}