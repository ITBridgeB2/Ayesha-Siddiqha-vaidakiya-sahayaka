import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManagerPatientDetails = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with actual API endpoint
    axios.get('http://localhost:9099/register/') // Change ID as needed
      .then(response => {
        setPatient(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch patient data', err);
        setLoading(false);
      });
  }, []);

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    header: {
      color: '#2c3e50',
      borderBottom: '2px solid #ccc',
      paddingBottom: '10px'
    },
    section: {
      marginTop: '25px'
    },
    subHeader: {
      color: '#34495e',
      marginBottom: '10px'
    },
    paragraph: {
      margin: '6px 0',
      color: '#333'
    },
    flags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px'
    },
    statusText: {
      textAlign: 'center',
      fontSize: '18px',
      padding: '30px',
      color: '#777'
    }
  };

  if (loading) return <p style={styles.statusText}>Loading patient details...</p>;
  if (!patient) return <p style={styles.statusText}>No patient data found.</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Patient Disease & Medical Details</h2>

      <section style={styles.section}>
        <h3 style={styles.subHeader}>Basic Info</h3>
        <p style={styles.paragraph}><strong>Name:</strong> {patient.name}</p>
        <p style={styles.paragraph}><strong>Age:</strong> {patient.age}</p>
        <p style={styles.paragraph}><strong>Gender:</strong> {patient.gender}</p>
        <p style={styles.paragraph}><strong>Adhaar:</strong> {patient.adhaar}</p>
        <p style={styles.paragraph}><strong>BPL Number:</strong> {patient.bplNumber}</p>
        <p style={styles.paragraph}><strong>Income:</strong> ₹{patient.income}</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeader}>Medical Info</h3>
        <p style={styles.paragraph}><strong>Blood Type:</strong> {patient.bloodType}</p>
        <p style={styles.paragraph}><strong>Illness:</strong> {patient.illness}</p>
        <p style={styles.paragraph}><strong>Duration:</strong> {patient.duration}</p>
        <p style={styles.paragraph}><strong>Tests:</strong> {patient.test}</p>
        <p style={styles.paragraph}><strong>Scans:</strong> {patient.scan}</p>
        <p style={styles.paragraph}><strong>Reports:</strong> {patient.reports}</p>
        <p style={styles.paragraph}><strong>Previous Doctor:</strong> {patient.previousDoctor}</p>
        <p style={styles.paragraph}><strong>Past Prescription:</strong> {patient.pastPrescription}</p>
        <div style={styles.flags}>
          <p style={styles.paragraph}><strong>BP:</strong> {patient.bp ? 'Yes' : 'No'}</p>
          <p style={styles.paragraph}><strong>Sugar:</strong> {patient.sugar ? 'Yes' : 'No'}</p>
          <p style={styles.paragraph}><strong>Kidney:</strong> {patient.kidney ? 'Yes' : 'No'}</p>
          <p style={styles.paragraph}><strong>Thyroid:</strong> {patient.thyroid ? 'Yes' : 'No'}</p>
          <p style={styles.paragraph}><strong>Allergies:</strong> {patient.allergies}</p>
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeader}>Contact Info</h3>
        <p style={styles.paragraph}><strong>Phone:</strong> {patient.tel}</p>
        <p style={styles.paragraph}><strong>Alternate Phone:</strong> {patient.altTel}</p>
        <p style={styles.paragraph}><strong>Email:</strong> {patient.email}</p>
        <p style={styles.paragraph}><strong>Address:</strong> {patient.address1}, {patient.address2}, {patient.address3}</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subHeader}>Assistant Info</h3>
        <p style={styles.paragraph}><strong>Name:</strong> {patient.assistantName}</p>
        <p style={styles.paragraph}><strong>Relation:</strong> {patient.relation}</p>
        <p style={styles.paragraph}><strong>Tel:</strong> {patient.assistantTel}</p>
        <p style={styles.paragraph}><strong>Address:</strong> {patient.assistantAddress1}</p>
      </section>
    </div>
  );
};

export default ManagerPatientDetails;
