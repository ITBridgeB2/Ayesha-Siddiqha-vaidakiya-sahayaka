import React, { useEffect, useState } from 'react';
import VaidyaService from './vaidyaService'; // Adjust the path if needed

const ManagerPatientDetails = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    VaidyaService.getService()
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPatients(response.data);
        } else {
          setPatients([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch patient data', err);
        setLoading(false);
      });
  }, []);

  const styles = {
    container: {
      maxWidth: '100%',
      overflowX: 'auto',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    header: {
      color: '#2c3e50',
      borderBottom: '2px solid #ccc',
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#34495e',
      color: '#fff',
      padding: '10px',
      border: '1px solid #ddd',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      border: '1px solid #ddd',
      fontSize: '14px',
    },
    statusText: {
      textAlign: 'center',
      fontSize: '18px',
      padding: '30px',
      color: '#777',
    },
  };

  if (loading) return <p style={styles.statusText}>Loading patient details...</p>;
  if (!patients.length) return <p style={styles.statusText}>No patients found.</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>All Patient Details</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Age</th>
            <th style={styles.th}>Gender</th>
            <th style={styles.th}>Adhaar</th>
            <th style={styles.th}>BPL No.</th>
            <th style={styles.th}>Income</th>
            <th style={styles.th}>Blood Type</th>
            <th style={styles.th}>Illness</th>
            <th style={styles.th}>Duration</th>
            <th style={styles.th}>Tests</th>
            <th style={styles.th}>Scans</th>
            <th style={styles.th}>Reports</th>
            <th style={styles.th}>Prev. Doctor</th>
            <th style={styles.th}>Prescriptions</th>
            <th style={styles.th}>BP</th>
            <th style={styles.th}>Sugar</th>
            <th style={styles.th}>Kidney</th>
            <th style={styles.th}>Thyroid</th>
            <th style={styles.th}>Allergies</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Alt. Phone</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Address</th>
            <th style={styles.th}>Assistant Name</th>
            <th style={styles.th}>Relation</th>
            <th style={styles.th}>Assistant Phone</th>
            <th style={styles.th}>Assistant Address</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td style={styles.td}>{patient.name}</td>
              <td style={styles.td}>{patient.age}</td>
              <td style={styles.td}>{patient.gender}</td>
              <td style={styles.td}>{patient.adhaar}</td>
              <td style={styles.td}>{patient.bplNumber}</td>
              <td style={styles.td}>₹{patient.income}</td>
              <td style={styles.td}>{patient.bloodType}</td>
              <td style={styles.td}>{patient.illness}</td>
              <td style={styles.td}>{patient.duration}</td>
              <td style={styles.td}>{patient.test}</td>
              <td style={styles.td}>{patient.scan}</td>
              <td style={styles.td}>{patient.reports}</td>
              <td style={styles.td}>{patient.previousDoctor}</td>
              <td style={styles.td}>{patient.pastPrescription}</td>
              <td style={styles.td}>{patient.bp ? 'Yes' : 'No'}</td>
              <td style={styles.td}>{patient.sugar ? 'Yes' : 'No'}</td>
              <td style={styles.td}>{patient.kidney ? 'Yes' : 'No'}</td>
              <td style={styles.td}>{patient.thyroid ? 'Yes' : 'No'}</td>
              <td style={styles.td}>{patient.allergies}</td>
              <td style={styles.td}>{patient.tel}</td>
              <td style={styles.td}>{patient.altTel}</td>
              <td style={styles.td}>{patient.email}</td>
              <td style={styles.td}>
                {patient.address1}, {patient.address2}, {patient.address3}
              </td>
              <td style={styles.td}>{patient.assistantName}</td>
              <td style={styles.td}>{patient.relation}</td>
              <td style={styles.td}>{patient.assistantTel}</td>
              <td style={styles.td}>{patient.assistantAddress1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerPatientDetails;




































































































































































































// import React, { useEffect, useState } from 'react';
// import VaidyaService from './vaidyaService'; // Adjust the path if needed

// const ManagerPatientDetails = () => {
//   const [patients, setPatients] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     VaidyaService.getService()
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setPatients(response.data);
//         } else {
//           setPatients([]);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Failed to fetch patient data', err);
//         setLoading(false);
//       });
//   }, []);

//   const styles = {
//     container: {
//       maxWidth: '800px',
//       margin: '40px auto',
//       padding: '20px',
//       fontFamily: 'Segoe UI, sans-serif',
//       backgroundColor: '#f9f9f9',
//       borderRadius: '10px',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     },
//     header: {
//       color: '#2c3e50',
//       borderBottom: '2px solid #ccc',
//       paddingBottom: '10px',
//     },
//     section: {
//       marginTop: '25px',
//     },
//     subHeader: {
//       color: '#34495e',
//       marginBottom: '10px',
//     },
//     paragraph: {
//       margin: '6px 0',
//       color: '#333',
//     },
//     flags: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       gap: '15px',
//     },
//     statusText: {
//       textAlign: 'center',
//       fontSize: '18px',
//       padding: '30px',
//       color: '#777',
//     },
//     card: {
//       marginBottom: '40px',
//       paddingBottom: '20px',
//       borderBottom: '1px solid #ddd',
//     },
//   };

//   if (loading) return <p style={styles.statusText}>Loading patient details...</p>;
//   if (!patients.length) return <p style={styles.statusText}>No patients found.</p>;

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.header}>All Patient Disease & Medical Details</h2>

//       {patients.map((patient, index) => (
//         <div key={index} style={styles.card}>
//           <section style={styles.section}>
//             <h3 style={styles.subHeader}>Basic Info</h3>
//             <p style={styles.paragraph}><strong>Name:</strong> {patient.name}</p>
//             <p style={styles.paragraph}><strong>Age:</strong> {patient.age}</p>
//             <p style={styles.paragraph}><strong>Gender:</strong> {patient.gender}</p>
//             <p style={styles.paragraph}><strong>Adhaar:</strong> {patient.adhaar}</p>
//             <p style={styles.paragraph}><strong>BPL Number:</strong> {patient.bplNumber}</p>
//             <p style={styles.paragraph}><strong>Income:</strong> ₹{patient.income}</p>
//           </section>

//           <section style={styles.section}>
//             <h3 style={styles.subHeader}>Medical Info</h3>
//             <p style={styles.paragraph}><strong>Blood Type:</strong> {patient.bloodType}</p>
//             <p style={styles.paragraph}><strong>Illness:</strong> {patient.illness}</p>
//             <p style={styles.paragraph}><strong>Duration:</strong> {patient.duration}</p>
//             <p style={styles.paragraph}><strong>Tests:</strong> {patient.test}</p>
//             <p style={styles.paragraph}><strong>Scans:</strong> {patient.scan}</p>
//             <p style={styles.paragraph}><strong>Reports:</strong> {patient.reports}</p>
//             <p style={styles.paragraph}><strong>Previous Doctor:</strong> {patient.previousDoctor}</p>
//             <p style={styles.paragraph}><strong>Past Prescription:</strong> {patient.pastPrescription}</p>
//             <div style={styles.flags}>
//               <p style={styles.paragraph}><strong>BP:</strong> {patient.bp ? 'Yes' : 'No'}</p>
//               <p style={styles.paragraph}><strong>Sugar:</strong> {patient.sugar ? 'Yes' : 'No'}</p>
//               <p style={styles.paragraph}><strong>Kidney:</strong> {patient.kidney ? 'Yes' : 'No'}</p>
//               <p style={styles.paragraph}><strong>Thyroid:</strong> {patient.thyroid ? 'Yes' : 'No'}</p>
//               <p style={styles.paragraph}><strong>Allergies:</strong> {patient.allergies}</p>
//             </div>
//           </section>

//           <section style={styles.section}>
//             <h3 style={styles.subHeader}>Contact Info</h3>
//             <p style={styles.paragraph}><strong>Phone:</strong> {patient.tel}</p>
//             <p style={styles.paragraph}><strong>Alternate Phone:</strong> {patient.altTel}</p>
//             <p style={styles.paragraph}><strong>Email:</strong> {patient.email}</p>
//             <p style={styles.paragraph}><strong>Address:</strong> {patient.address1}, {patient.address2}, {patient.address3}</p>
//           </section>

//           <section style={styles.section}>
//             <h3 style={styles.subHeader}>Assistant Info</h3>
//             <p style={styles.paragraph}><strong>Name:</strong> {patient.assistantName}</p>
//             <p style={styles.paragraph}><strong>Relation:</strong> {patient.relation}</p>
//             <p style={styles.paragraph}><strong>Tel:</strong> {patient.assistantTel}</p>
//             <p style={styles.paragraph}><strong>Address:</strong> {patient.assistantAddress1}</p>
//           </section>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ManagerPatientDetails;


















































































































// // import React, { useEffect, useState } from 'react';
// // import VaidyaService from './vaidyaService'; // Adjust the path if needed

// // const ManagerPatientDetails = () => {
// //   const [patient, setPatient] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     VaidyaService.getService()
// //       .then((response) => {
// //         if (Array.isArray(response.data) && response.data.length > 0) {
// //           setPatient(response.data[0]); // Use first patient in array
// //         } else {
// //           setPatient(null);
// //         }
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.error('Failed to fetch patient data', err);
// //         setLoading(false);
// //       });
// //   }, []);

// //   const styles = {
// //     container: {
// //       maxWidth: '800px',
// //       margin: '40px auto',
// //       padding: '20px',
// //       fontFamily: 'Segoe UI, sans-serif',
// //       backgroundColor: '#f9f9f9',
// //       borderRadius: '10px',
// //       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
// //     },
// //     header: {
// //       color: '#2c3e50',
// //       borderBottom: '2px solid #ccc',
// //       paddingBottom: '10px',
// //     },
// //     section: {
// //       marginTop: '25px',
// //     },
// //     subHeader: {
// //       color: '#34495e',
// //       marginBottom: '10px',
// //     },
// //     paragraph: {
// //       margin: '6px 0',
// //       color: '#333',
// //     },
// //     flags: {
// //       display: 'flex',
// //       flexWrap: 'wrap',
// //       gap: '15px',
// //     },
// //     statusText: {
// //       textAlign: 'center',
// //       fontSize: '18px',
// //       padding: '30px',
// //       color: '#777',
// //     },
// //   };

// //   if (loading) return <p style={styles.statusText}>Loading patient details...</p>;
// //   if (!patient) return <p style={styles.statusText}>No patient data found.</p>;

// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.header}>Patient Disease & Medical Details</h2>

// //       <section style={styles.section}>
// //         <h3 style={styles.subHeader}>Basic Info</h3>
// //         <p style={styles.paragraph}><strong>Name:</strong> {patient.name}</p>
// //         <p style={styles.paragraph}><strong>Age:</strong> {patient.age}</p>
// //         <p style={styles.paragraph}><strong>Gender:</strong> {patient.gender}</p>
// //         <p style={styles.paragraph}><strong>Adhaar:</strong> {patient.adhaar}</p>
// //         <p style={styles.paragraph}><strong>BPL Number:</strong> {patient.bplNumber}</p>
// //         <p style={styles.paragraph}><strong>Income:</strong> ₹{patient.income}</p>
// //       </section>

// //       <section style={styles.section}>
// //         <h3 style={styles.subHeader}>Medical Info</h3>
// //         <p style={styles.paragraph}><strong>Blood Type:</strong> {patient.bloodType}</p>
// //         <p style={styles.paragraph}><strong>Illness:</strong> {patient.illness}</p>
// //         <p style={styles.paragraph}><strong>Duration:</strong> {patient.duration}</p>
// //         <p style={styles.paragraph}><strong>Tests:</strong> {patient.test}</p>
// //         <p style={styles.paragraph}><strong>Scans:</strong> {patient.scan}</p>
// //         <p style={styles.paragraph}><strong>Reports:</strong> {patient.reports}</p>
// //         <p style={styles.paragraph}><strong>Previous Doctor:</strong> {patient.previousDoctor}</p>
// //         <p style={styles.paragraph}><strong>Past Prescription:</strong> {patient.pastPrescription}</p>
// //         <div style={styles.flags}>
// //           <p style={styles.paragraph}><strong>BP:</strong> {patient.bp ? 'Yes' : 'No'}</p>
// //           <p style={styles.paragraph}><strong>Sugar:</strong> {patient.sugar ? 'Yes' : 'No'}</p>
// //           <p style={styles.paragraph}><strong>Kidney:</strong> {patient.kidney ? 'Yes' : 'No'}</p>
// //           <p style={styles.paragraph}><strong>Thyroid:</strong> {patient.thyroid ? 'Yes' : 'No'}</p>
// //           <p style={styles.paragraph}><strong>Allergies:</strong> {patient.allergies}</p>
// //         </div>
// //       </section>

// //       <section style={styles.section}>
// //         <h3 style={styles.subHeader}>Contact Info</h3>
// //         <p style={styles.paragraph}><strong>Phone:</strong> {patient.tel}</p>
// //         <p style={styles.paragraph}><strong>Alternate Phone:</strong> {patient.altTel}</p>
// //         <p style={styles.paragraph}><strong>Email:</strong> {patient.email}</p>
// //         <p style={styles.paragraph}><strong>Address:</strong> {patient.address1}, {patient.address2}, {patient.address3}</p>
// //       </section>

// //       <section style={styles.section}>
// //         <h3 style={styles.subHeader}>Assistant Info</h3>
// //         <p style={styles.paragraph}><strong>Name:</strong> {patient.assistantName}</p>
// //         <p style={styles.paragraph}><strong>Relation:</strong> {patient.relation}</p>
// //         <p style={styles.paragraph}><strong>Tel:</strong> {patient.assistantTel}</p>
// //         <p style={styles.paragraph}><strong>Address:</strong> {patient.assistantAddress1}</p>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ManagerPatientDetails;
