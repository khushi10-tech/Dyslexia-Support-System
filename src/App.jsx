import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Avtar from "./pages/Avtar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import Lessons from "./pages/Lessons";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


function App() {

return (

<BrowserRouter>

<div style={{display:"flex"}}>



<div style={{flex:1, padding:"20px"}}>

<Routes>

<Route path="/" element={<Home />} />
<Route path="/Login" element={<Login />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
 <Route path="/dashboard" element={<Dashboard />} /> 
<Route path="/Avtar" element={<Avtar />} />
<Route path="/signup" element={<Signup />} />
<Route path="/lessons" element={<Lessons />} />
<Route path="/achievements" element={<Achievements />} />
<Route path="/profile" element={<Profile />} />
<Route path="/settings" element={<Settings />} />


</Routes>

</div>

</div>

</BrowserRouter>

);

}

export default App;