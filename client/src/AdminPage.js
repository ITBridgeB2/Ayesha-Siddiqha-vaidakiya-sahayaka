import React, { useState } from 'react';
import ManagerPatientDetails from './manager';
import Reviews from './review';
import AddHospitals from './addHospitals';
import AdminDetails from './adminDetails'; // ✅ Import the AdminDetails component

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('patients');

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      
      <nav className="nav-menu">
        <button 
          onClick={() => setActiveSection('patients')}
          className={activeSection === 'patients' ? 'active' : ''}
        >
          Patient Details
        </button>
        <button 
          onClick={() => setActiveSection('reviews')}
          className={activeSection === 'reviews' ? 'active' : ''}
        >
          Reviews
        </button>
        <button 
          onClick={() => setActiveSection('add-hospitals')}
          className={activeSection === 'add-hospitals' ? 'active' : ''}
        >
          Add Hospitals
        </button>
        <button 
          onClick={() => setActiveSection('admin-details')}
          className={activeSection === 'admin-details' ? 'active' : ''}
        >
          Admin Users
        </button>
      </nav>

      <div className="dashboard-content">
        {activeSection === 'patients' && <ManagerPatientDetails />}
        {activeSection === 'reviews' && <Reviews />}
        {activeSection === 'add-hospitals' && <AddHospitals />}
        {activeSection === 'admin-details' && <AdminDetails />} {/* ✅ Renders AdminDetails */}
      </div>

      <style jsx>{`
        .admin-dashboard {
          font-family: 'Arial', sans-serif;
          padding: 30px;
          background-color: #f4f6f9;
          border-radius: 10px;
          max-width: 1000px;
          margin: 0 auto;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
          color: #333;
          font-size: 24px;
          margin-bottom: 30px;
          text-align: center;
        }

        .nav-menu {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .nav-menu button {
          padding: 12px 25px;
          font-size: 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav-menu button:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }

        .nav-menu button.active {
          background-color: #0056b3;
          font-weight: bold;
        }

        .dashboard-content {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .dashboard-content > div {
          padding: 20px;
          background-color: #fafafa;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;









































































































