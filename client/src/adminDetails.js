import React, { useEffect, useState } from 'react';
import VaidyaService from './vaidyaService'; 

const AdminDetails = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    VaidyaService.getAllAdmins()
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAdmins(response.data);
        } else {
          setAdmins([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch admin data', err);
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

  if (loading) return <p style={styles.statusText}>Loading admin details...</p>;
  if (!admins.length) return <p style={styles.statusText}>No admin users found.</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Admin  Details</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Email</th> 
            <th style={styles.th}>Password</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td style={styles.td}>{admin.id}</td>
              <td style={styles.td}>{admin.username}</td>
              <td style={styles.td}>{admin.email}</td> 
              <td style={styles.td}>{admin.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDetails;
