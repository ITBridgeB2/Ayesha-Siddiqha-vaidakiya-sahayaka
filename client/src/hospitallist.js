import React, { useEffect, useState } from 'react';
import VaidyaService from './vaidyaService'; // Adjust the path as needed

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    VaidyaService.getAllHospitals()
      .then((response) => {
        if (response && response.data) {
          setHospitals(response.data);
        } else {
          console.warn('Unexpected hospital data format:', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching hospital data:', error);
        alert('Failed to load hospital list');
      });
  }, []);

  return (
    <div className="hospital-table-container">
      <h2>Hospital List</h2>
      {hospitals.length > 0 ? (
        <table className="hospital-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital) => (
              <tr key={hospital.id}>
                <td>{hospital.id}</td>
                <td>{hospital.name}</td>
                <td>{hospital.location}</td>
                <td>{hospital.contactNumber}</td>
                <td>{hospital.email}</td>
                <td>{hospital.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hospitals found.</p>
      )}

      <style jsx>{`
        .hospital-table-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .hospital-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .hospital-table th,
        .hospital-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        .hospital-table th {
          background-color: #007bff;
          color: white;
        }

        .hospital-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .hospital-table tr:hover {
          background-color: #e6f2ff;
        }

        h2 {
          text-align: center;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default HospitalList;
