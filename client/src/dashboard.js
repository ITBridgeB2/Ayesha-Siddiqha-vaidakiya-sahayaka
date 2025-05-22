import React, { useState } from 'react';
import ReviewHospitals from './ReviewHospitals';
import ChildRegister from './ChildRegister';
import MatchingHospitals from './MatchingHospitals';
import HospitalList from './hospitallist'; 

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('review');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>
      
      <div className="button-container">
        <button onClick={() => handleSectionChange('review')} className="section-button">
          Review Hospitals
        </button>
        <button onClick={() => handleSectionChange('child')} className="section-button">
          Child Register
        </button>
        <button onClick={() => handleSectionChange('matching')} className="section-button">
          Matching Hospitals
        </button>
        <button onClick={() => handleSectionChange('list')} className="section-button">
          View All Hospitals
        </button>
      </div>

      <div className="section-content">
        {activeSection === 'review' && <ReviewHospitals />}
        {activeSection === 'child' && <ChildRegister />}
        {activeSection === 'matching' && <MatchingHospitals />}
        {activeSection === 'list' && <HospitalList />} {/* ✅ Show HospitalList */}
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        .dashboard-container {
          font-family: Arial, sans-serif;
          padding: 20px;
          text-align: center;
          background-color: #f5f5f5;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #333;
          margin-bottom: 20px;
        }

        .button-container {
          margin-bottom: 30px;
        }

        .section-button {
          padding: 10px 20px;
          margin: 10px 5px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .section-button:hover {
          background-color: #0056b3;
        }

        .section-content {
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }

        .section-content > div {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;







































































































