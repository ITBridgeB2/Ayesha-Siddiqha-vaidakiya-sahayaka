import cors from 'cors'
import express from 'express'
import mysql from 'mysql2/promise'

var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

let db = ({
    host: "localhost",
    user: "root",
    password: 'root',
    database: 'vaidya'
});
//get all
app.get("/register", async function (request, response) {    //localhost:9090/visitors
    const query = "SELECT * FROM patients"
    const connection = await mysql.createConnection(db);
    const [result] = await connection.execute(query);
    return response.json(result);   //all the visitors
})


//get visitor by id
// visitorapp.get("/visitors/:visitorId", async function (request, response) {    //localhost:9090/visitors
//     const visitorId = request.params.visitorId
//     const query = "SELECT * FROM visitors where visitorId = "+visitorId
//     const connection = await mysql.createConnection(db);
//     const [result] = await connection.execute(query);
//     return response.json(result);   //all the visitors
// })
//save visitor  localhost:9099/visitors
app.post('/register',async (req,res)=>
    {
        try{
            //create the connection
            const connection=await mysql.createConnection(db);
            //it will fetched data from body and assignit to individual variable
            const {
                name, age, gender, adhaar, bplNumber, income, bloodType,
                illness, duration, test, scan, reports, previousDoctor, pastPrescription,
                bp, sugar, kidney, thyroid, allergies, tel, altTel, email,
                address1, address2, address3, assistantName, relation, assistantTel, assistantAddress1,
                password
              } = req.body;
              
              const [result] = await connection.execute(
                `INSERT INTO patients (
                  name, age, gender, adhaar, bplNumber, income, bloodType,
                  illness, duration, test, scan, reports, previousDoctor, pastPrescription,
                  bp, sugar, kidney, thyroid, allergies, tel, altTel, email,
                  address1, address2, address3, assistantName, relation, assistantTel, assistantAddress1,
                  password
                ) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                  name, age, gender, adhaar, bplNumber, income, bloodType,
                  illness, duration, test, scan, reports, previousDoctor, pastPrescription,
                  bp, sugar, kidney, thyroid, allergies, tel, altTel, email,
                  address1, address2, address3, assistantName, relation, assistantTel, assistantAddress1,
                  password
                ]
              );
              
            await connection.close();
            res.status(201).json({message:'Data instered sucessfully'})
            }catch(error){
                console.error('Error inserting data:',error)
                res.status(500).json({error:'Failed to insert data'})
            }
    })

    app.get("/register/:name/:password", async function (request, response) {
      const name = request.params.name;
      const password = request.params.password;
      const connection = await mysql.createConnection(db);
    
      const [result] = await connection.execute(
        'SELECT * FROM patients WHERE name = ? AND password = ?',
        [name, password]
      );
    
      if (result.length === 0) {
        return response.status(204).json("User not found");
      } else {
        return response.status(200).json(result[0].name); // or any other field like firstName
      }
    });

    
app.get("/register/:adhaar", async (req, res) => {
  const adhaar = req.params.adhaar;

  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute(
      `SELECT * FROM patients WHERE adhaar = ?`,
      [adhaar]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post('/admin', async (req, res) => {
  try {
    const connection = await mysql.createConnection(db);
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const [result] = await connection.execute(
      'INSERT INTO admin (username, email, password) VALUES (?, ?, ?)',
      [username, email, password]
    );

    await connection.end();

    res.status(201).json({ message: 'Admin registered successfully', id: result.insertId });
  } catch (error) {
    console.error('Error registering admin:', error);
    res.status(500).json({ error: 'Failed to register admin' });
  }
});
// app.get("/admin/:name/:password", async function (req, res) {
//   const username = req.params.username;
//   const password = req.params.password;

//   if (!username || !password) {
//     return res.status(400).json({ error: 'Name and password are required' });
//   }

//   const connection = await mysql.createConnection(db);

//   try {
//     const [result] = await connection.execute(
//       'SELECT * FROM admin WHERE username = ? AND password = ?',
//       [username, password]
//     );

//     if (result.length === 0) {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     return res.status(200).json(result[0]);
//   } catch (error) {
//     console.error("Error during admin login:", error);
//     return res.status(500).json({ error: "Server error" });
//   } finally {
//     await connection.end();
//   }
// });

app.get('/admin/:username/:password', async (req, res) => {
  const { username, password } = req.params;

  console.log('Received username:', username);
  console.log('Received password:', password);

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const connection = await mysql.createConnection(db);
    const [result] = await connection.execute(
      'SELECT * FROM admin WHERE username = ? AND password = ?',
      [username, password]
    );

    await connection.end();

    if (result.length === 0) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json(result[0]);
  } catch (error) {
    console.error('Error during admin login:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get("/admin", async function (request, response) {    //localhost:9090/visitors
  const query = "SELECT * FROM admin"
  const connection = await mysql.createConnection(db);
  const [result] = await connection.execute(query);
  return response.json(result);   //all the visitors
})

app.post('/hospitals', async (req, res) => {
  try {
    // Create connection
    const connection = await mysql.createConnection(db);

    const { name, location, contactNumber, email, description } = req.body;

    const [result] = await connection.execute(
      `INSERT INTO hospitals (name, location, contactNumber, email, description) VALUES (?, ?, ?, ?, ?)`,
      [name, location, contactNumber, email, description]
    );

    await connection.close();
    res.status(201).json({ message: 'Hospital added successfully' });

  } catch (error) {
    console.error('Error adding hospital:', error);
    res.status(500).json({ error: 'Failed to add hospital' });
  }
});

// app.post('/reviews', async (req, res) => {
//   try {
//     const { hospitalId, review } = req.body;

//     if (!hospitalId || !review) {
//       return res.status(400).json({ message: 'hospitalId and review are required' });
//     }

//     // Create DB connection
//     const connection = await mysql.createConnection(db);

//     const [result] = await connection.execute(
//       `INSERT INTO reviews (hospital_id, review ,hospital_name) VALUES (?, ?, ?)`,
//       [hospitalId, review]
//     );

//     await connection.end();

//     res.status(201).json({
//       message: 'Review saved successfully',
//       reviewId: result.insertId
//     });

//   } catch (error) {
//     console.error('Error saving review:', error);
//     res.status(500).json({ message: 'Failed to save review' });
//   }
// });
app.post('/reviews', async (req, res) => {
  try {
    const { hospitalId, review, hospital_name } = req.body;

    // Validate input fields
    if (!hospitalId || !review || !hospital_name) {
      return res.status(400).json({
        message: 'hospitalId, review, and hospital_name are required',
      });
    }

    // Create DB connection using mysql2's promise API
    const connection = await mysql.createConnection(db);

    // Insert the review into the database
    const [result] = await connection.execute(
      `INSERT INTO reviews (hospital_id, review, hospital_name) VALUES (?, ?, ?)`,
      [hospitalId, review, hospital_name]
    );

    // Close the connection
    await connection.end();

    // Respond with a success message and the inserted reviewId
    res.status(201).json({
      message: 'Review saved successfully',
      reviewId: result.insertId,
    });
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).json({ message: 'Failed to save review' });
  }
});



// GET route: Get all hospitals
app.get("/hospitals", async function (request, response) {    //localhost:9090/visitors
  const query = "SELECT * FROM hospitals"
  const connection = await mysql.createConnection(db);
  const [result] = await connection.execute(query);
  return response.json(result);   //all the visitors
})

app.get("/reviews", async function (request, response) {    //localhost:9090/visitors
  const query = "SELECT * FROM reviews"
  const connection = await mysql.createConnection(db);
  const [result] = await connection.execute(query);
  return response.json(result);   //all the visitors
})

app.listen("9099")
console.log("vaidya app started on 9099 port")