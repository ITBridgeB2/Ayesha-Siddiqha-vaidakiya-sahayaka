import React, { useState } from 'react';
import VaidyaService from './vaidyaService';
import { useNavigate } from 'react-router-dom';

const RegisterPatient = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    adhaar: '',
    bplNumber: '',
    income: '',
    bloodType: '',
    illness: '',
    duration: '',
    test: '',
    scan: '',
    reports: '',
    previousDoctor: '',
    pastPrescription: '',
    bp: false,
    sugar: false,
    kidney: false,
    thyroid: false,
    allergies: '',
    tel: '',
    altTel: '',
    email: '',
    address1: '',
    address2: '',
    address3: '',
    assistantName: '',
    relation: '',
    assistantTel: '',
    assistantAddress1: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formData.password !== formData.confirmPassword) {
  //     alert('Passwords do not match!');
  //     return;
  //   }
  //   // alert('Patient registered successfully!');
  //   console.log(formData);
  //   navigate('/registerSuccess')
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    VaidyaService.saveVisitorDetails(formData)
      .then((response) => {
        console.log("Patient registered successfully:", response.data);
        navigate('/registerSuccess'); // redirect after successful registration
      })
      .catch((error) => {
        console.error("Error saving patient data:", error);
        alert('Failed to register patient. Please try again.');
      });
  };
  

  return (
    <div style={styles.container}>
      <style>
        {`
          input, textarea, select {
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 8px;
            width: 100%;
            box-sizing: border-box;
            font-size: 1rem;
          }
          textarea {
            resize: vertical;
            min-height: 60px;
          }
          label {
            display: block;
            margin-top: 6px;
            font-size: 0.95rem;
          }
          button:hover {
            background-color: #005f87;
          }
        `}
      </style>
      <h2 style={styles.title}>Register Patient</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Basic Information</legend>
          <input name="name" placeholder="Full Name" required onChange={handleChange} />
          <input name="age" type="number" placeholder="Age" required onChange={handleChange} />
          <select name="gender" required onChange={handleChange}>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input name="adhaar" placeholder="Adhaar Card Number" required maxLength="12" onChange={handleChange} />
          <input name="bplNumber" placeholder="BPL Card Number" onChange={handleChange} />
          <input name="income" type="number" placeholder="Annual Income" required onChange={handleChange} />
          <input name="bloodType" placeholder="Blood Type (e.g., B+)" onChange={handleChange} />
          <textarea name="illness" placeholder="Illness or Diseases" required onChange={handleChange}></textarea>
          <input name="duration" placeholder="Duration of Illness" onChange={handleChange} />
        </fieldset>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Diagnosis History</legend>
          <input name="test" placeholder="Tests Done" onChange={handleChange} />
          <input name="scan" placeholder="Scans Done" onChange={handleChange} />
          <input name="reports" placeholder="Reports Available" onChange={handleChange} />
          <input name="previousDoctor" placeholder="Previous Doctor Name" onChange={handleChange} />
          <textarea name="pastPrescription" placeholder="Past Prescription Details" onChange={handleChange}></textarea>
        </fieldset>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Other Complaints</legend>
          <label><input type="checkbox" name="bp" onChange={handleChange} /> Blood Pressure</label>
          <label><input type="checkbox" name="sugar" onChange={handleChange} /> Sugar</label>
          <label><input type="checkbox" name="kidney" onChange={handleChange} /> Kidney Issues</label>
          <label><input type="checkbox" name="thyroid" onChange={handleChange} /> Thyroid</label>
          <textarea name="allergies" placeholder="Allergies" onChange={handleChange}></textarea>
        </fieldset>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Contact Details</legend>
          <input name="tel" type="tel" placeholder="Phone Number" required onChange={handleChange} />
          <input name="altTel" type="tel" placeholder="Alternate Number" onChange={handleChange} />
          <input name="email" type="email" placeholder="Email Address" required onChange={handleChange} />
          <input name="address1" placeholder="Address Line 1" required onChange={handleChange} />
          <input name="address2" placeholder="Address Line 2" onChange={handleChange} />
          <input name="address3" placeholder="Address Line 3" onChange={handleChange} />
        </fieldset>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Patient Assistance</legend>
          <input name="assistantName" placeholder="Assistant's Name" onChange={handleChange} />
          <input name="relation" placeholder="Relation to Patient" onChange={handleChange} />
          <input name="assistantTel" type="tel" placeholder="Assistant's Phone Number" onChange={handleChange} />
          <input name="assistantAddress1" placeholder="Assistant Address Line 1" onChange={handleChange} />
        </fieldset>

        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Account Credentials</legend>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
          />
        </fieldset>

        <button type="submit" style={styles.button} >Register Patient</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#0077b6'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldset: {
    border: 'none',
    marginBottom: '20px'
  },
  legend: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#023e8a',
    marginBottom: '10px'
  },
  button: {
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#0077b6',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '20px'
  }
};

export default RegisterPatient;



















































































































































