import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VaidyaService from './vaidyaService';  // Import VaidyaService which makes API calls

const LoginForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: '', username: '', password: '' });
  const [error, setError] = useState('');
  const [isAdminLogin, setIsAdminLogin] = useState(false);  // Toggle for admin or user login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setError(''); // Reset the error message when the user starts typing
  };

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent form submission

    const { name, username, password } = credentials;

    // Input validation
    if (!password || (isAdminLogin && !username) || (!isAdminLogin && !name)) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      let response;

      // Check if Admin login is selected
      // if (isAdminLogin) {
      //   // Make API call to validate admin credentials
      //   console.log(`Checking admin credentials for: ${username}, ${password}`);
      //   response = await VaidyaService.getAdminDetails(username, password);

      //   if (response.data) {
      //     const adminData = response.data;

      //     // Check if data is returned and it's not an empty array
      //     if (!adminData || adminData.length === 0) {
      //       setError('Invalid admin username or password.');
      //       return;
      //     }

      //     // Admin login successful, redirect to admin dashboard
      //     console.log(`Admin ${username} logged in successfully!`);
      //     alert(`Welcome, Admin ${username}!`);
      //     navigate('/adminboard');  // Navigate to the admin dashboard
      //   } else {
      //     console.error('Admin data is not returned from the backend.');
      //     setError('Invalid admin username or password.');
      //   }
      // } 
      if (isAdminLogin) {
        console.log(`Checking admin credentials for: ${username}, ${password}`);
        response = await VaidyaService.getAdminDetails(username, password);
      
        const adminData = response.data;
      
        if (!adminData || Object.keys(adminData).length === 0) {
          setError('Invalid admin username or password.');
          return;
        }
      
        // Admin login successful
        console.log(`Admin ${username} logged in successfully!`);
        alert(`Welcome, Admin ${username}!`);
        navigate('/adminboard');
      }
      else {
        // Make API call to validate user credentials
        console.log(`Checking user credentials for: ${name}, ${password}`);
        response = await VaidyaService.validateUser(name, password);

        if (response.data) {
          const userData = response.data;

          // Check if data is returned and it's not an empty array
          if (!userData || userData.length === 0) {
            setError('Invalid user name or password.');
            return;
          }

          // User login successful, redirect to user dashboard
          console.log(`User ${name} logged in successfully!`);
          alert(`Welcome, ${name}!`);
          navigate('/userdashboard');  // Navigate to the user dashboard
        } else {
          console.error('User data is not returned from the backend.');
          setError('Invalid user name or password.');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  const toggleLoginType = (type) => {
    setIsAdminLogin(type === 'admin');  // Toggle between user/admin login
    setCredentials({ name: '', username: '', password: '' });  // Clear credentials
    setError('');  // Clear error message
  };

  const handleForgotPassword = () => {
    navigate('/ForgetPassword');  // Navigate to the password reset page
  };

  return (
    <div className="container">
      <h2 className="title">{isAdminLogin ? 'Admin Login' : 'User Login'}</h2>
      <form onSubmit={handleLogin} className="form">
        {isAdminLogin ? (
          <>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Enter admin username"
              required
            />
          </>
        ) : (
          <>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              value={credentials.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        {error && <div className="error">{error}</div>}

        <div className="buttonGroup">
          <button type="submit">Login</button>
          <span className="link" onClick={handleForgotPassword}>Forgot Password?</span>
        </div>
      </form>

      <div className="switchLinks">
        {isAdminLogin ? (
          <>
            Not an admin?{' '}
            <span className="link" onClick={() => toggleLoginType('user')}>User Login</span>
          </>
        ) : (
          <>
            Want to log in as an admin?{' '}
            <span className="link" onClick={() => toggleLoginType('admin')}>Admin Login</span>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
























































































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import VaidyaService from './vaidyaService';  // Import VaidyaService which makes API calls

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({ name: '', username: '', password: '' });
//   const [error, setError] = useState('');
//   const [isAdminLogin, setIsAdminLogin] = useState(false);  // Toggle for admin or user login

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//     setError(''); // Reset the error message when the user starts typing
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();  // Prevent form submission

//     const { name, username, password } = credentials;

//     // Input validation
//     if (!password || (isAdminLogin && !username) || (!isAdminLogin && !name)) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//   //   try {
//   //     let response;

//   //     // Check if Admin login is selected
//   //     if (isAdminLogin) {
//   //       // Make API call to validate admin credentials
//   //       response = await VaidyaService.getAdminDetails(username, password);
//   //       const adminData = response.data;

//   //       // If no data is returned, show error
//   //       if (!adminData || adminData.length === 0) {
//   //         setError('Invalid admin username or password.');
//   //         return;
//   //       }

//   //       // Admin login successful, redirect to admin dashboard
//   //       alert(`Welcome, Admin ${username}!`);
//   //       navigate('/adminboard');  // Navigate to the admin dashboard
//   //     } else {
//   //       // Make API call to validate user credentials
//   //       response = await VaidyaService.validateUser(name, password);
//   //       const userData = response.data;

//   //       // If no data is returned, show error
//   //       if (!userData || userData.length === 0) {
//   //         setError('Invalid user name or password.');
//   //         return;
//   //       }

//   //       // User login successful, redirect to user dashboard
//   //       alert(`Welcome, ${name}!`);
//   //       navigate('/userdashboard');  // Navigate to the user dashboard
//   //     }
//   //   } catch (error) {
//   //     console.error('Login error:', error);
//   //     setError('Login failed. Please try again.');
//   //   }
//   // };

//   // const toggleLoginType = (type) => {
//   //   setIsAdminLogin(type === 'admin');  // Toggle between user/admin login
//   //   setCredentials({ name: '', username: '', password: '' });  // Clear credentials
//   //   setError('');  // Clear error message
//   // };

//   // const handleForgotPassword = () => {
//   //   navigate('/ForgetPassword');  // Navigate to the password reset page
//   // };

//   return (
//     <div className="container">
//       <h2 className="title">{isAdminLogin ? 'Admin Login' : 'User Login'}</h2>
//       <form onSubmit={handleLogin} className="form">
//         {isAdminLogin ? (
//           <>
//             <label htmlFor="username">Username</label>
//             <input
//               name="username"
//               value={credentials.username}
//               onChange={handleChange}
//               placeholder="Enter admin username"
//               required
//             />
//           </>
//         ) : (
//           <>
//             <label htmlFor="name">Name</label>
//             <input
//               name="name"
//               value={credentials.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               required
//             />
//           </>
//         )}

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={credentials.password}
//           onChange={handleChange}
//           placeholder="Enter your password"
//           required
//         />

//         {error && <div className="error">{error}</div>}

//         <div className="buttonGroup">
//           <button type="submit">Login</button>
//           <span className="link" onClick={handleForgotPassword}>Forgot Password?</span>
//         </div>
//       </form>

//       <div className="switchLinks">
//         {isAdminLogin ? (
//           <>
//             Not an admin?{' '}
//             <span className="link" onClick={() => toggleLoginType('user')}>User Login</span>
//           </>
//         ) : (
//           <>
//             Want to log in as an admin?{' '}
//             <span className="link" onClick={() => toggleLoginType('admin')}>Admin Login</span>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginForm;





























































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import VaidyaService from './vaidyaService'; // Make sure the path is correct

// const AdminRegister = () => {
//   const navigate = useNavigate();
//   const [adminDetails, setAdminDetails] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAdminDetails({ ...adminDetails, [name]: value });
//     setError('');
//     setSuccess('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmPassword } = adminDetails;

//     // Validation
//     if (!name || !email || !password || !confirmPassword) {
//       setError('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

// //     try {
// //       const response = await VaidyaService.saveRegisterDetails(adminDetails);

// //       if (response.data.success) {
// //         setSuccess('Admin registered successfully!');
// //         setTimeout(() => navigate('/login'), 2000); // Redirect to login after success
// //       } 
// //       else {
// //         setError(response.data.message || 'Error registering admin');
// //       }
// //     } 
// //     catch (err) {
// //       console.error('Error registering admin:', err);
// //       setError('Failed to register admin. Please try again.');
// //     }
// //   };
//     try {
//       // Call the saveRegisterDetails function to register the admin
//       const response = await VaidyaService.saveRegisterDetails(adminDetails);
  
//       if (response.data.success) {
//         setSuccess('Admin registered successfully!');
//         setTimeout(() => navigate('/login'), 2000); // Redirect to login after success
//       } else {
//         setError(response.data.message || 'Error registering admin');
//       }
//     } catch (err) {
//     //   console.error('Error registering admin:', err);
//       setError('Failed to register admin. Please try again.');
//     }
//   };
  

//   return (
//     <div className="container">
//       <h2 className="title">Admin Registration</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <label htmlFor="name">Name</label>
//         <input
//           name="name"
//           placeholder="Enter your name"
//           value={adminDetails.name}
//           onChange={handleChange}
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//           value={adminDetails.email}
//           onChange={handleChange}
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//           value={adminDetails.password}
//           onChange={handleChange}
//         />

//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           name="confirmPassword"
//           type="password"
//           placeholder="Confirm your password"
//           value={adminDetails.confirmPassword}
//           onChange={handleChange}
//         />

//         {error && <div className="error">{error}</div>}
//         {success && <div className="success">{success}</div>}

//         <button type="submit">Register</button>
//       </form>

//       <style>
//         {`
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//           }

//           .container {
//             max-width: 400px;
//             margin: 60px auto;
//             padding: 30px;
//             background-color: #f9f9f9;
//             border-radius: 12px;
//             box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//             font-family: 'Segoe UI', sans-serif;
//           }

//           .title {
//             text-align: center;
//             margin-bottom: 20px;
//             color: #0077b6;
//             font-size: 1.8rem;
//             font-weight: bold;
//           }

//           .form {
//             display: flex;
//             flex-direction: column;
//           }

//           label {
//             font-size: 1rem;
//             margin-bottom: 8px;
//             color: #333;
//           }

//           input {
//             padding: 12px;
//             margin: 8px 0;
//             border: 1px solid #ccc;
//             border-radius: 8px;
//             font-size: 1rem;
//             outline: none;
//           }

//           input:focus {
//             border-color: #0077b6;
//             box-shadow: 0 0 5px rgba(0, 119, 182, 0.5);
//           }

//           .error {
//             color: red;
//             font-size: 0.9rem;
//             margin-top: 10px;
//           }

//           .success {
//             color: green;
//             font-size: 0.9rem;
//             margin-top: 10px;
//           }

//           button {
//             padding: 12px 20px;
//             background-color: #0077b6;
//             color: white;
//             font-size: 1rem;
//             border: none;
//             border-radius: 8px;
//             cursor: pointer;
//             transition: background-color 0.3s ease;
//           }

//           button:hover {
//             background-color: #005f87;
//           }

//           @media (max-width: 480px) {
//             .container {
//               width: 90%;
//               padding: 20px;
//             }

//             .title {
//               font-size: 1.5rem;
//             }

//             button {
//               width: 100%;
//               font-size: 1.1rem;
//             }

//             input {
//               width: 100%;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default AdminRegister;
































































































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import VaidyaService from './vaidyaService'; // Import the service file

// const AdminRegister = () => {
//   const navigate = useNavigate();
//   const [adminDetails, setAdminDetails] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAdminDetails({ ...adminDetails, [name]: value });
//     setError('');
//     setSuccess('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, password, confirmPassword } = adminDetails;

//     // Validation
//     if (!name || !email || !password || !confirmPassword) {
//       setError('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await VaidyaService.saveRegisterDetails(adminDetails);

//       if (response.data.success) {
//         setSuccess('Admin registered successfully!');
//         setTimeout(() => navigate('/login'), 2000); // Redirect to login after success
//       } else {
//         setError(response.data.message || 'Error registering admin');
//       }
//     } catch (err) {
//       console.error('Error registering admin:', err);
//       setError('Failed to register admin. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="title">Admin Registration</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <label htmlFor="name">Name</label>
//         <input
//           name="name"
//           placeholder="Enter your name"
//           value={adminDetails.name}
//           onChange={handleChange}
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//           value={adminDetails.email}
//           onChange={handleChange}
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//           value={adminDetails.password}
//           onChange={handleChange}
//         />

//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           name="confirmPassword"
//           type="password"
//           placeholder="Confirm your password"
//           value={adminDetails.confirmPassword}
//           onChange={handleChange}
//         />

//         {error && <div className="error">{error}</div>}
//         {success && <div className="success">{success}</div>}

//         <button type="submit">Register</button>
//       </form>

//       <style>
//         {`
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//           }

//           .container {
//             max-width: 400px;
//             margin: 60px auto;
//             padding: 30px;
//             background-color: #f9f9f9;
//             border-radius: 12px;
//             box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//             font-family: 'Segoe UI', sans-serif;
//           }

//           .title {
//             text-align: center;
//             margin-bottom: 20px;
//             color: #0077b6;
//             font-size: 1.8rem;
//             font-weight: bold;
//           }

//           .form {
//             display: flex;
//             flex-direction: column;
//           }

//           label {
//             font-size: 1rem;
//             margin-bottom: 8px;
//             color: #333;
//           }

//           input {
//             padding: 12px;
//             margin: 8px 0;
//             border: 1px solid #ccc;
//             border-radius: 8px;
//             font-size: 1rem;
//             outline: none;
//           }

//           input:focus {
//             border-color: #0077b6;
//             box-shadow: 0 0 5px rgba(0, 119, 182, 0.5);
//           }

//           .error {
//             color: red;
//             font-size: 0.9rem;
//             margin-top: 10px;
//           }

//           .success {
//             color: green;
//             font-size: 0.9rem;
//             margin-top: 10px;
//           }

//           button {
//             padding: 12px 20px;
//             background-color: #0077b6;
//             color: white;
//             font-size: 1rem;
//             border: none;
//             border-radius: 8px;
//             cursor: pointer;
//             transition: background-color 0.3s ease;
//           }

//           button:hover {
//             background-color: #005f87;
//           }

//           @media (max-width: 480px) {
//             .container {
//               width: 90%;
//               padding: 20px;
//             }

//             .title {
//               font-size: 1.5rem;
//             }

//             button {
//               width: 100%;
//               font-size: 1.1rem;
//             }

//             input {
//               width: 100%;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default AdminRegister;





































































































































// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const AdminRegister = () => {
// //   const navigate = useNavigate();
// //   const [adminDetails, setAdminDetails] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: ''
// //   });
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setAdminDetails({ ...adminDetails, [name]: value });
// //     setError('');
// //     setSuccess('');
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const { name, email, password, confirmPassword } = adminDetails;

// //     // Validation
// //     if (!name || !email || !password || !confirmPassword) {
// //       setError('All fields are required');
// //       return;
// //     }

// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match');
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('http://localhost:9099/admin', {
// //         name,
// //         email,
// //         password
// //       });

// //       if (response.data.success) {
// //         setSuccess('Admin registered successfully!');
// //         setTimeout(() => navigate('/login'), 2000); // Redirect to login after success
// //       } else {
// //         setError(response.data.message || 'Error registering admin');
// //       }
// //     } catch (err) {
// //       console.error('Error registering admin:', err);
// //       setError('Failed to register admin. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <h2 className="title">Admin Registration</h2>
// //       <form onSubmit={handleSubmit} className="form">
// //         <label htmlFor="name">Name</label>
// //         <input
// //           name="name"
// //           placeholder="Enter your name"
// //           value={adminDetails.name}
// //           onChange={handleChange}
// //         />

// //         <label htmlFor="email">Email</label>
// //         <input
// //           name="email"
// //           type="email"
// //           placeholder="Enter your email"
// //           value={adminDetails.email}
// //           onChange={handleChange}
// //         />

// //         <label htmlFor="password">Password</label>
// //         <input
// //           name="password"
// //           type="password"
// //           placeholder="Enter your password"
// //           value={adminDetails.password}
// //           onChange={handleChange}
// //         />

// //         <label htmlFor="confirmPassword">Confirm Password</label>
// //         <input
// //           name="confirmPassword"
// //           type="password"
// //           placeholder="Confirm your password"
// //           value={adminDetails.confirmPassword}
// //           onChange={handleChange}
// //         />

// //         {error && <div className="error">{error}</div>}
// //         {success && <div className="success">{success}</div>}

// //         <button type="submit">Register</button>
// //       </form>

// //       <style>
// //         {`
// //           * {
// //             margin: 0;
// //             padding: 0;
// //             box-sizing: border-box;
// //           }

// //           .container {
// //             max-width: 400px;
// //             margin: 60px auto;
// //             padding: 30px;
// //             background-color: #f9f9f9;
// //             border-radius: 12px;
// //             box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
// //             font-family: 'Segoe UI', sans-serif;
// //           }

// //           .title {
// //             text-align: center;
// //             margin-bottom: 20px;
// //             color: #0077b6;
// //             font-size: 1.8rem;
// //             font-weight: bold;
// //           }

// //           .form {
// //             display: flex;
// //             flex-direction: column;
// //           }

// //           label {
// //             font-size: 1rem;
// //             margin-bottom: 8px;
// //             color: #333;
// //           }

// //           input {
// //             padding: 12px;
// //             margin: 8px 0;
// //             border: 1px solid #ccc;
// //             border-radius: 8px;
// //             font-size: 1rem;
// //             outline: none;
// //           }

// //           input:focus {
// //             border-color: #0077b6;
// //             box-shadow: 0 0 5px rgba(0, 119, 182, 0.5);
// //           }

// //           .error {
// //             color: red;
// //             font-size: 0.9rem;
// //             margin-top: 10px;
// //           }

// //           .success {
// //             color: green;
// //             font-size: 0.9rem;
// //             margin-top: 10px;
// //           }

// //           button {
// //             padding: 12px 20px;
// //             background-color: #0077b6;
// //             color: white;
// //             font-size: 1rem;
// //             border: none;
// //             border-radius: 8px;
// //             cursor: pointer;
// //             transition: background-color 0.3s ease;
// //           }

// //           button:hover {
// //             background-color: #005f87;
// //           }

// //           @media (max-width: 480px) {
// //             .container {
// //               width: 90%;
// //               padding: 20px;
// //             }

// //             .title {
// //               font-size: 1.5rem;
// //             }

// //             button {
// //               width: 100%;
// //               font-size: 1.1rem;
// //             }

// //             input {
// //               width: 100%;
// //             }
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // };

// // export default AdminRegister;
