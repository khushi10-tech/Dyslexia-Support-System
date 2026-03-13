import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Avtar from "./pages/Avtar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/lessons";   
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import LetterGame from "./pages/LetterGame";
import WordPredictionGame from "./pages/WordPredictionGame";
import PronunciationGame from "./pages/PronunciationGame";
import WordScramble from "./pages/WordScramble";

function App() {

return (

<BrowserRouter>

<div style={{display:"flex"}}>


<div style={{flex:1, padding:"20px"}}>

<Routes>

<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/Avtar" element={<Avtar />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/lessons" element={<Lessons />} />
<Route path="/achievements" element={<Achievements />} />
<Route path="/profile" element={<Profile />} />
<Route path="/settings" element={<Settings />} />
<Route path="/letter-game" element={<LetterGame />} />
<Route path="/word-prediction-game" element={<WordPredictionGame />} />
<Route path="/pronunciation-game" element={<PronunciationGame />} />
<Route path="/scramble" element={<WordScramble />} />
<Route path="/Sidebar" element={<Sidebar />} />


</Routes>

</div>

</div>

</BrowserRouter>

);

}

export default App;