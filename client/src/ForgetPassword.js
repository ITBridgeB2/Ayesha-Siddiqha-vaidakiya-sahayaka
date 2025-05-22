import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleReset = () => {
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!storedUser) {
      alert('No registered user found.');
      return;
    }

    if (name.trim() !== storedUser.name) {
      alert('Name does not match our records.');
      return;
    }

    if (!newPassword || newPassword.length < 4) {
      alert('Password must be at least 4 characters.');
      return;
    }
    navigate('/Disease')
    const updatedUser = { ...storedUser, password: newPassword };
    localStorage.setItem('registeredUser', JSON.stringify(updatedUser));

    alert('Password reset successfully!');
    setName('');
    setNewPassword('');
  };

  return (
    <div style={styles.container}>
      <h2>Reset Password</h2>
      <div style={styles.formContainer}>
        <label>Registered Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={handleReset}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

// Inline styles (internal CSS in JSX)
const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  formContainer: {
    marginTop: '20px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
    margin: '0 auto',
  },
  input: {
    width: '90%',
    padding: '10px',
    margin: '8px 0 16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ForgotPassword;








































































































