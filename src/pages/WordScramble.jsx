import { useState } from "react";

export default function WordScramble() {

const words = [
  {scrambled:"tca", answer:"cat"},
  {scrambled:"odg", answer:"dog"},
  {scrambled:"sun", answer:"sun"},
  {scrambled:"ookb", answer:"book"}
];

const [index,setIndex]=useState(0);
const [guess,setGuess]=useState("");
const [message,setMessage]=useState("");

const checkAnswer=()=>{

if(guess.toLowerCase()===words[index].answer){

setMessage("✅ Correct!");

setTimeout(()=>{
setIndex((index+1)%words.length);
setGuess("");
setMessage("");
},1000);

}
else{
setMessage("❌ Try again");
}

};

return (

<div className="p-8">

<h1 className="text-3xl font-bold mb-4">
Word Scramble Game
</h1>

<h2 className="text-xl mb-4">
Unscramble: {words[index].scrambled}
</h2>

<input
className="border p-2 mr-2"
value={guess}
onChange={(e)=>setGuess(e.target.value)}
placeholder="Enter word"
/>

<button
className="bg-purple-600 text-white px-4 py-2"
onClick={checkAnswer}
>
Check
</button>

<p className="mt-4">{message}</p>

</div>

);

}