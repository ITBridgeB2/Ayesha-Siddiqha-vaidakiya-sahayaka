import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterSuccess = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login'); 
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          button {
            padding: 12px 24px;
            font-size: 1rem;
            background-color: #0077b6;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
          }
          button:hover {
            background-color: #005f87;
          }
        `}
      </style>
      <h2 style={styles.title}>🎉 Registration Successful!</h2>
      <p style={styles.message}>Thank you for registering. You can now log in to your account.</p>
      <button onClick={handleGoToLogin}>Go to Login</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '80px auto',
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f0f8ff',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    color: '#0077b6',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.1rem',
    marginBottom: '30px',
    color: '#333',
  }
};

export default RegisterSuccess;
