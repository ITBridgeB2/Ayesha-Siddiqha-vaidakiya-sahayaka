import React, { useState } from 'react';

const diseaseToHospitalsMap = {
        "Cardiac Arrest": [
          { name: "Narayana Institute of Cardiac Sciences", address: "Hosur Road, Bommasandra, Bengaluru" },
          { name: "Fortis Hospital", address: "Bannerghatta Road, Bengaluru" },
          { name: "Manipal Hospital", address: "HAL Airport Road, Bengaluru" }
        ],
        "Diabetes": [
          { name: "M.S. Ramaiah Memorial Hospital", address: "New BEL Road, Bengaluru" },
          { name: "St. John's Medical College Hospital", address: "Sarjapur Road, Bengaluru" },
          { name: "Manipal Hospital", address: "HAL Airport Road, Bengaluru" }
        ],
        "Cancer": [
          { name: "Kidwai Memorial Institute of Oncology", address: "Dr. M.H. Marigowda Road, Bengaluru" },
          { name: "HCG Cancer Hospital", address: "Double Road, Bengaluru" },
          { name: "BGS Gleneagles Global Hospital", address: "Kengeri, Bengaluru" }
        ],
        "Covid-19": [
          { name: "Victoria Hospital", address: "K.R. Market, Bengaluru" },
          { name: "Bowring and Lady Curzon Hospital", address: "Shivaji Nagar, Bengaluru" },
          { name: "Sakra World Hospital", address: "Outer Ring Road, Marathahalli, Bengaluru" }
        ],
        "Orthopedics": [
          { name: "Hosmat Hospital", address: "Magrath Road, Bengaluru" },
          { name: "Aster CMI Hospital", address: "Hebbal, Bengaluru" },
          { name: "Columbia Asia Hospital", address: "Yeshwanthpur, Bengaluru" }
        ]
      };
      

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  header: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333'
  },
  label: {
    fontSize: '18px',
    display: 'block',
    marginBottom: '8px'
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  result: {
    marginTop: '20px',
    backgroundColor: 'skyblue',
    padding: '15px',
    borderRadius: '6px',
    border: '1px solid #ddd'
  },
  listItem: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '10px'
  }
};

const Disease = () => {
  const [selectedDisease, setSelectedDisease] = useState('');
  const [suggestedHospitals, setSuggestedHospitals] = useState([]);

  const handleDiseaseChange = (event) => {
    const disease = event.target.value;
    setSelectedDisease(disease);
    setSuggestedHospitals(diseaseToHospitalsMap[disease] || []);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Hospital Suggestion System</h1>

      <label htmlFor="disease-select" style={styles.label}>
        Select a Disease:
      </label>
      <select
        id="disease-select"
        value={selectedDisease}
        onChange={handleDiseaseChange}
        style={styles.select}
      >
        <option value="">--Please choose a disease--</option>
        {Object.keys(diseaseToHospitalsMap).map((disease) => (
          <option key={disease} value={disease}>
            {disease}
          </option>
        ))}
      </select>

      {selectedDisease && (
        <div style={styles.result}>
          <h3>Hospitals treating "{selectedDisease}":</h3>
          <ul>
            {suggestedHospitals.map((hospital, index) => (
              <li key={index} style={styles.listItem}>
                <strong>{hospital.name}</strong><br />
                Address: {hospital.address}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Disease;










































































































































































































