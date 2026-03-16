


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Avtar from "./pages/Avtar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {

return (

<BrowserRouter>

<div style={{display:"flex"}}>



<div style={{flex:1, padding:"20px"}}>

<Routes>

<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/avatar" element={<Avtar />} />
<Route path="/signup" element={<Signup />} />

</Routes>

</div>

</div>

</BrowserRouter>

);

}

export default App;