import React, { useState } from 'react';
import VaidyaService from './vaidyaService';

const AddHospitals = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [location, setLocation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleAddHospital = () => {
    if (hospitalName && location && contactNumber && email && description) {
      const hospitalData = {
        name: hospitalName,
        location,
        contactNumber,
        email,
        description,
      };

      VaidyaService.saveHospitalDetails(hospitalData)
        .then(() => {
          alert('Hospital added successfully!');
          setHospitalName('');
          setLocation('');
          setContactNumber('');
          setEmail('');
          setDescription('');
        })
        .catch(error => {
          console.error('Error adding hospital:', error);
          alert('Failed to add hospital.');
        });
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="add-hospital-container">
      <h3>Add a New Hospital</h3>

      <div className="form-container">
        <input
          type="text"
          placeholder="Hospital Name"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea-field"
        ></textarea>

        <button onClick={handleAddHospital} className="submit-button">
          Add Hospital
        </button>
      </div>

      <style jsx>{`
        .add-hospital-container {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #f4f7fc;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          margin: 30px auto;
        }

        h3 {
          color: #333;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .form-container {
          display: flex;
          flex-direction: column;
        }

        .input-field,
        .textarea-field {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 5px;
          border: 1px solid #ddd;
          font-size: 16px;
          background-color: #fff;
        }

        .textarea-field {
          height: 150px;
          resize: vertical;
        }

        .submit-button {
          padding: 12px 20px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #45a049;
        }

        .input-field:focus,
        .textarea-field:focus {
          outline: none;
          border-color: #007bff;
        }
      `}</style>
    </div>
  );
};

export default AddHospitals;





