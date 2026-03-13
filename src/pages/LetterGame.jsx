import { useState } from "react";

export default function LetterGame(){

const letters = ["b","d","p","q"];
const correct = "b";

const [result,setResult] = useState("");

const check = (letter) => {

if(letter === correct){
setResult("✅ Correct!");
}else{
setResult("❌ Not correct");
}

};

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
AI Letter Recognition
</h1>

<p className="mb-6">
Select the letter that matches the sound "b"
</p>

<div className="flex gap-4">

{letters.map((l,i)=>(
<button
key={i}
onClick={()=>check(l)}
className="bg-green-500 text-white p-4 text-xl"
>
{l}
</button>
))}

</div>

<p className="mt-4">{result}</p>

</div>

);

}