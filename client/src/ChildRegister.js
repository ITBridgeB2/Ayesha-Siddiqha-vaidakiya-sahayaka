import React, { useState } from 'react';
import axios from 'axios';

const ChildRegister = () => {
  const [childName, setChildName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = () => {
    if (childName && age && gender) {
      axios.post('http://localhost:5000/api/children', { childName, age, gender })
        .then(response => {
          alert('Child registered successfully!');
          setChildName('');
          setAge('');
          setGender('');
        })
        .catch(error => {
          console.error('Error registering child:', error);
          alert('Failed to register child.');
        });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="register-container">
      <h2>Child Register</h2>
      <img src="child.jpg" alt="Child Register" className="register-image" />
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Child's Name"
          value={childName}
          onChange={(e) => setChildName(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-container">
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-container">
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="select-field">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button onClick={handleSubmit} className="submit-button">Register Child</button>

      {/* Internal CSS */}
      <style jsx>{`
        .register-container {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #fafafa;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          margin: 0 auto;
        }

        h2 {
          color: #333;
          margin-bottom: 20px;
        }

        .register-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .input-container {
          margin-bottom: 20px;
        }

        .input-field {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
          background-color: #fff;
        }

        .select-field {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
          background-color: #fff;
        }

        .submit-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ChildRegister;
