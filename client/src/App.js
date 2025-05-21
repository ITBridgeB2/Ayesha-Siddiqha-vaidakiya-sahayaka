import React from "react";
import{ Route,Routes } from 'react-router-dom';
import Home from "./Home";
import RegisterSuccess from "./registerSuccess";
import RegisterPatient from "./Register";
import LoginForm from "./login";
import ForgotPassword from "./ForgetPassword";
import Disease from "./Disease";
import Dashboard from "./dashboard";
import AdminDashboard from "./AdminPage";
import AdminRegister from "./registerAdmin";


function App(){
  return(
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Register" element={<RegisterPatient/>}/>
    <Route path="/registerSuccess" element={<RegisterSuccess/>}/>
    <Route path="/login" element={<LoginForm/>}/>
    <Route path="/ForgetPassword" element={<ForgotPassword/>}/>
    <Route path="/Disease" element={<Disease/>}/>
    <Route path="/userdashboard" element={<Dashboard/>}/>
    <Route path="/adminboard" element={<AdminDashboard/>}/>
    <Route path="/AdminRegister" element={<AdminRegister/>}/>
    </Routes>
  )
}
export default App;



















































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
