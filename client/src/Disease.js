import React, { useState } from 'react';

const diseaseToHospitalsMap = {
  "Cardiac Arrest": [
    {
      name: "Narayana Institute of Cardiac Sciences",
      address: "Hosur Road, Bommasandra, Bengaluru",
      url: "https://www.narayanahealth.org/hospitals/bangalore/narayana-institute-of-cardiac-sciences"
    },
    {
      name: "Fortis Hospital",
      address: "Bannerghatta Road, Bengaluru",
      url: "https://www.fortisbangalore.com"
    },
    {
      name: "Manipal Hospital",
      address: "HAL Airport Road, Bengaluru",
      url: "https://www.manipalhospitals.com/bangalore/"
    }
  ],
  "Diabetes": [
    {
      name: "M.S. Ramaiah Memorial Hospital",
      address: "New BEL Road, Bengaluru",
      url: "https://msrmh.com"
    },
    {
      name: "St. John's Medical College Hospital",
      address: "Sarjapur Road, Bengaluru",
      url: "https://www.stjohns.in"
    },
    {
      name: "Manipal Hospital",
      address: "HAL Airport Road, Bengaluru",
      url: "https://www.manipalhospitals.com/bangalore/"
    }
  ],
  "Cancer": [
    {
      name: "Kidwai Memorial Institute of Oncology",
      address: "Dr. M.H. Marigowda Road, Bengaluru",
      url: "http://kmio.karnataka.gov.in"
    },
    {
      name: "HCG Cancer Hospital",
      address: "Double Road, Bengaluru",
      url: "https://www.hcgoncology.com"
    },
    {
      name: "BGS Gleneagles Global Hospital",
      address: "Kengeri, Bengaluru",
      url: "https://gleneaglesglobalhospitals.com"
    }
  ],
  "Covid-19": [
    {
      name: "Victoria Hospital",
      address: "K.R. Market, Bengaluru",
      url: "http://www.bmcri.org"
    },
    {
      name: "Bowring and Lady Curzon Hospital",
      address: "Shivaji Nagar, Bengaluru",
      url: "https://karunadu.karnataka.gov.in"
    },
    {
      name: "Sakra World Hospital",
      address: "Outer Ring Road, Marathahalli, Bengaluru",
      url: "https://www.sakraworldhospital.com"
    }
  ],
  "Orthopedics": [
    {
      name: "Hosmat Hospital",
      address: "Magrath Road, Bengaluru",
      url: "https://www.hosmathospitals.com"
    },
    {
      name: "Aster CMI Hospital",
      address: "Hebbal, Bengaluru",
      url: "https://www.asterbangalore.com"
    },
    {
      name: "Columbia Asia Hospital",
      address: "Yeshwanthpur, Bengaluru",
      url: "https://www.columbiaindiahospitals.com"
    }
  ],
  "Childcare" : [
  {
    name: "Rainbow Children's Hospital",
    address: "Marathahalli, Bengaluru",
    url: "https://www.rainbowhospitals.in"
  },
  {
    name: "Aster Women & Children Hospital",
    address: "Hebbal, Bengaluru",
    url: "https://www.asterhospitals.in/hospitals/aster-women-children-bangalore"
  },
  {
    name: "Manipal Hospital – Pediatrics",
    address: "Old Airport Road, Bengaluru",
    url: "https://www.manipalhospitals.com/bangalore/specialities/paediatrics/"
  },
  {
    name: "Indira Gandhi Institute of Child Health",
    address: "Jayanagar, Bengaluru",
    url: "https://igich.karnataka.gov.in/english"
  },
  {
    name: "Motherhood Hospital",
    address: "Indiranagar, Bengaluru",
    url: "https://www.motherhoodindia.com"
  }
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
  },
  link: {
    textDecoration: 'underline',
    color: 'blue'
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
                <strong>
                  <a
                    href={hospital.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    {hospital.name}
                  </a>
                </strong>
                <br />
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


































































































































































































