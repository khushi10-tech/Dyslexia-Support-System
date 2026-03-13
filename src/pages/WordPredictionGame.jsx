import { useState } from "react";

export default function WordPredictionGame(){

const sentence = "The cat is";
const predictions = ["sleeping","running","jumping"];

const [choice,setChoice] = useState("");
const [result,setResult] = useState("");

const checkAnswer = (word) => {

setChoice(word);

if(word === "sleeping"){
setResult("✅ Correct prediction!");
}
else{
setResult("❌ Try again");
}

};

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
AI Word Prediction
</h1>

<p className="mb-6">{sentence} ___</p>

{predictions.map((p,i)=>(
<button
key={i}
onClick={()=>checkAnswer(p)}
className="bg-blue-500 text-white px-4 py-2 mr-3 mb-3"
>
{p}
</button>
))}

<p className="mt-4">{result}</p>

</div>

);

}