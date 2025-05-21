const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // use your actual MySQL password
  database: 'vaidya',
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL');
});

// Register API
app.post('/register', (req, res) => {
  const { patient, attender, disease } = req.body;

  // Validation
  if (!patient || !attender || !disease) {
    return res.status(400).json({ error: 'Missing patient, attender, or disease data' });
  }

  const insertPatientQuery = `
    INSERT INTO patients 
    (name, age, gender, adhaar, bplNumber, income, bloodType, tel, altTel, email, address1, address2, address3, password)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const patientValues = [
    patient.name, patient.age, patient.gender, patient.adhaar, patient.bplNumber,
    patient.income, patient.bloodType, patient.tel, patient.altTel,
    patient.email, patient.address1, patient.address2, patient.address3, patient.password
  ];

  db.query(insertPatientQuery, patientValues, (err, result) => {
    if (err) {
      console.error('❌ Error inserting patient:', err);
      return res.status(500).json({ error: 'Failed to insert patient' });
    }

    const patientId = result.insertId;
    console.log('🆔 Patient inserted with ID:', patientId);

    const insertAttenderQuery = `
      INSERT INTO attenders 
      (patient_id, assistantName, relation, assistantTel, assistantAddress1)
      VALUES (?, ?, ?, ?, ?)
    `;

    const attenderValues = [
      patientId,
      attender.assistantName,
      attender.relation,
      attender.assistantTel,
      attender.assistantAddress1
    ];

    db.query(insertAttenderQuery, attenderValues, (err) => {
      if (err) {
        console.error('❌ Error inserting attender:', err);
        return res.status(500).json({ error: 'Failed to insert attender' });
      }

      const insertDiseaseQuery = `
        INSERT INTO diseases 
        (patient_id, illness, duration, test, scan, reports, previousDoctor, pastPrescription, bp, sugar, kidney, thyroid, allergies)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const diseaseValues = [
        patientId,
        disease.illness,
        disease.duration,
        disease.test,
        disease.scan,
        disease.reports,
        disease.previousDoctor,
        disease.pastPrescription,
        disease.bp,
        disease.sugar,
        disease.kidney,
        disease.thyroid,
        disease.allergies
      ];

      db.query(insertDiseaseQuery, diseaseValues, (err) => {
        if (err) {
          console.error('❌ Error inserting disease:', err);
          return res.status(500).json({ error: 'Failed to insert disease' });
        }

        console.log('✅ Patient, attender, and disease inserted');
        res.status(201).json({ message: '✅ Patient registered successfully' });
      });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});




















































































































































































