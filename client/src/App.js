import Header from "./components/Header"
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors/Doctors";
import DoctorDetails from "./pages/Doctors/DoctorDetails";
import Login from "./pages/Doctors/Login";
import Signup from "./pages/Signup";
import './App.css';
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="text-[20px] text-blue-600 ">
<Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/services' element={<Services/>}/>
<Route path="/doctors" element={<Doctors/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Signup/>}/>

<Route path='/doctors/:id' element={<DoctorDetails/>}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>
<Footer/>
    </div>
  );
}

export default App;