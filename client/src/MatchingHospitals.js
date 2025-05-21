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










































































































































































































// import React, { useState } from 'react';
// import VaidyaService from './vaidyaService';

// const MatchingHospitals = () => {
//   const [criteria, setCriteria] = useState('');
//   const [matchedHospitals, setMatchedHospitals] = useState([]);

//   const handleSearch = () => {
//     if (criteria.trim() === '') {
//       alert('Please enter search criteria.');
//       return;
//     }

//     VaidyaService.searchHospitals(criteria)
//       .then((response) => {
//         setMatchedHospitals(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching hospitals:', error);
//         alert('Failed to fetch hospital data.');
//       });
//   };

//   return (
//     <div className="matching-container">
//       <h2>Find Hospitals by Criteria</h2>

//       <input
//         type="text"
//         placeholder="Enter hospital name, location, etc."
//         value={criteria}
//         onChange={(e) => setCriteria(e.target.value)}
//         className="search-input"
//       />

//       <button onClick={handleSearch} className="search-button">
//         Search
//       </button>

//       <div className="results">
//         {matchedHospitals.length > 0 ? (
//           <ul>
//             {matchedHospitals.map((hospital) => (
//               <li key={hospital.id} className="hospital-card">
//                 <strong>{hospital.name}</strong><br />
//                 Location: {hospital.location}<br />
//                 Contact: {hospital.contactNumber}<br />
//                 Email: {hospital.email}<br />
//                 Description: {hospital.description}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No hospitals found for the given criteria.</p>
//         )}
//       </div>

//       {/* CSS */}
//       <style jsx>{`
//         .matching-container {
//           max-width: 700px;
//           margin: 40px auto;
//           padding: 20px;
//           font-family: 'Segoe UI', sans-serif;
//           background: #fdfdfd;
//           border-radius: 8px;
//           box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
//         }

//         h2 {
//           text-align: center;
//           color: #333;
//           margin-bottom: 20px;
//         }

//         .search-input {
//           width: 100%;
//           padding: 12px;
//           font-size: 16px;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//           margin-bottom: 10px;
//         }

//         .search-button {
//           padding: 10px 20px;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           font-size: 16px;
//           cursor: pointer;
//           margin-bottom: 20px;
//         }

//         .search-button:hover {
//           background-color: #0056b3;
//         }

//         .results ul {
//           list-style-type: none;
//           padding: 0;
//         }

//         .hospital-card {
//           background: #f1f9ff;
//           margin-bottom: 15px;
//           padding: 15px;
//           border-radius: 6px;
//           border-left: 4px solid #007bff;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MatchingHospitals;




































































































































































































































































































































































































































// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const MatchingHospitals = () => {
// //   const [criteria, setCriteria] = useState('');
// //   const [matchedHospitals, setMatchedHospitals] = useState([]);

// //   const handleSearch = () => {
// //     if (criteria) {
// //       axios.get(`http://localhost:5000/api/hospitals/search?criteria=${criteria}`)
// //         .then(response => {
// //           setMatchedHospitals(response.data);
// //         })
// //         .catch(error => {
// //           console.error('Error fetching matched hospitals:', error);
// //         });
// //     } else {
// //       alert('Please provide search criteria.');
// //     }
// //   };

// //   return (
// //     <div className="matching-container">
// //       <h2>Matching Hospitals</h2>
// //       <img 
// //         src="/images/matching-hospitals.jpg" 
// //         alt="Matching Hospitals" 
// //         className="hospital-image"
// //       />
      
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Enter search criteria"
// //           value={criteria}
// //           onChange={(e) => setCriteria(e.target.value)}
// //           className="search-input"
// //         />
// //       </div>
// //       <button onClick={handleSearch} className="search-button">
// //         Find Hospitals
// //       </button>

// //       <div className="results-container">
// //         {matchedHospitals.length > 0 ? (
// //           <ul className="hospital-list">
// //             {matchedHospitals.map((hospital) => (
// //               <li key={hospital.id} className="hospital-item">{hospital.name}</li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No hospitals found for the given criteria.</p>
// //         )}
// //       </div>

// //       {/* Internal CSS */}
// //       <style jsx>{`
// //         .matching-container {
// //           font-family: Arial, sans-serif;
// //           padding: 20px;
// //           background-color: #fafafa;
// //           border-radius: 8px;
// //           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// //           max-width: 600px;
// //           margin: 0 auto;
// //         }

// //         h2 {
// //           color: #333;
// //           margin-bottom: 20px;
// //         }

// //         .hospital-image {
// //           width: 100%;
// //           height: auto;
// //           border-radius: 8px;
// //           margin-bottom: 20px;
// //         }

// //         .search-container {
// //           margin-bottom: 20px;
// //         }

// //         .search-input {
// //           width: 100%;
// //           padding: 10px;
// //           border-radius: 5px;
// //           border: 1px solid #ccc;
// //           font-size: 16px;
// //           background-color: #fff;
// //         }

// //         .search-button {
// //           padding: 10px 20px;
// //           background-color: #007bff;
// //           color: white;
// //           border: none;
// //           border-radius: 5px;
// //           cursor: pointer;
// //           font-size: 16px;
// //           margin-top: 10px;
// //           transition: background-color 0.3s ease;
// //         }

// //         .search-button:hover {
// //           background-color: #0056b3;
// //         }

// //         .results-container {
// //           margin-top: 20px;
// //         }

// //         .hospital-list {
// //           list-style-type: none;
// //           padding: 0;
// //         }

// //         .hospital-item {
// //           background-color: #f9f9f9;
// //           padding: 10px;
// //           margin-bottom: 10px;
// //           border-radius: 5px;
// //           box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// //         }

// //         .hospital-item:hover {
// //           background-color: #e2e2e2;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default MatchingHospitals;
