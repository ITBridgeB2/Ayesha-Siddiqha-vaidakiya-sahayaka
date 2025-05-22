import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/Register');
  };
  const handleAdminRegister = () => {
    navigate('/registerAdmin');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Vaidyakiya Sahayaka</h1>
        <p><b>Your trusted digital assistant for medical support and guidance</b></p>
      </header>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>📋 Symptom-based medical assistance</li>
          <li>🩺 Book appointments with certified doctors with the help of NGO</li>
          <li>💊 Medicine prescriptions or Report management</li>
          <li>📊 Health record storage and tracking</li>
          <li>🌐 Multi-language support</li>
        </ul>
      </section>

      <div className="buttons">
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleAdminRegister}>Admin Register</button>
      </div>
    </div>
  );
};

export default Home;





































































































