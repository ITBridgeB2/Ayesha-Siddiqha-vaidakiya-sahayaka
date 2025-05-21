import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import RegisterPatient from './Register';
import RegisterSuccess from './registerSuccess';
import Disease from './Disease';
import ManagerPatientDetails from './manager';
import Dashboard from './dashboard';
import AdminDashboard from './AdminPage';
import AdminRegister from './registerAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <BrowserRouter>
  <a href="/">Home</a>
  {/* <ManagerPatientDetails></ManagerPatientDetails>
  < Disease></Disease> */}
  {/* <a href="/Register">Register</a>
  <a href="/registerSuccess">Success</a> */}
   {/* <Dashboard></Dashboard> */}
  {/* <AdminDashboard></AdminDashboard> 
 <AdminRegister></AdminRegister> */}

  <App></App>
  </BrowserRouter>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

