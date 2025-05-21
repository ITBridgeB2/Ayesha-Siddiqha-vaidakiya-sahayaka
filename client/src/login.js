import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VaidyaService from './vaidyaService';

const LoginForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const [error, setError] = useState('');
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { name, password } = credentials;

    if (!name || !password) {
      setError('Name and password are required.');
      return;
    }

    try {
      let response;

      if (isAdminLogin) {
        response = await VaidyaService.getAdminDetails(name, password);
        const adminData = response.data;

        if (!adminData || adminData.length === 0) {
          setError('Invalid admin credentials.');
          return;
        }

        alert(`Welcome, Admin ${name}!`);
        navigate('/adminboard');
      } else {
        response = await VaidyaService.validateUser(name, password);
        const userData = response.data;

        if (!userData || userData.length === 0) {
          setError('Invalid user credentials.');
          return;
        }

        alert(`Welcome, ${name}!`);
        navigate('/userdashboard');
      }
    } catch (err) {
      console.error(err);
      // setError('Login failed. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/ForgetPassword');
  };

  const toggleLoginType = (type) => {
    setIsAdminLogin(type === 'admin');
    setCredentials({ name: '', password: '' });
    setError('');
  };

  return (
    <div className="container">
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .container {
            max-width: 400px;
            margin: 60px auto;
            padding: 30px;
            background-color: #f9f9f9;
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            font-family: 'Segoe UI', sans-serif;
          }

          .title {
            text-align: center;
            margin-bottom: 20px;
            color: #0077b6;
            font-size: 1.8rem;
            font-weight: bold;
          }

          .form {
            display: flex;
            flex-direction: column;
          }

          label {
            font-size: 1rem;
            margin-bottom: 8px;
            color: #333;
          }

          input {
            padding: 12px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
            outline: none;
          }

          input:focus {
            border-color: #0077b6;
            box-shadow: 0 0 5px rgba(0, 119, 182, 0.5);
          }

          .error {
            color: red;
            font-size: 0.9rem;
            margin-top: 10px;
          }

          .buttonGroup {
            display: flex;
            justify-content: flex-start;
            gap: 10px;
            margin-top: 20px;
          }

          button {
            padding: 12px 20px;
            background-color: #0077b6;
            color: white;
            font-size: 1rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          button:hover {
            background-color: #005f87;
          }

          .link {
            text-decoration: none;
            color: rgb(3, 97, 147);
            font-size: 0.9rem;
            cursor: pointer;
          }

          .link:hover {
            text-decoration: underline;
          }

          .switchLinks {
            margin-top: 20px;
            text-align: center;
          }

          @media (max-width: 480px) {
            .container {
              width: 90%;
              padding: 20px;
            }

            .title {
              font-size: 1.5rem;
            }

            button {
              width: 100%;
              font-size: 1.1rem;
            }

            input {
              width: 100%;
            }
          }
        `}
      </style>

      <h2 className="title">{isAdminLogin ? 'Admin Login' : 'User Login'}</h2>
      <form onSubmit={handleLogin} className="form">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          placeholder="Enter your name"
          value={credentials.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        {error && <div className="error">{error}</div>}

        <div className="buttonGroup">
          <button type="submit">Login</button>
          <span onClick={handleForgotPassword} className="link">Forgot Password</span>
        </div>
      </form>

      <div className="switchLinks">
        {isAdminLogin ? (
          <>
            Not an admin?{' '}
            <span onClick={() => toggleLoginType('user')} className="link">
              User Login
            </span>
          </>
        ) : (
          <>
            Want to log in as an admin?{' '}
            <span onClick={() => toggleLoginType('admin')} className="link">
              Admin Login
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

























































































































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import VaidyaService from './vaidyaService';

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({ name: '', password: '' });
//   const [error, setError] = useState('');
//   const [isAdminLogin, setIsAdminLogin] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//     setError('');
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!credentials.name || !credentials.password) {
//       setError('Name and password are required.');
//       return;
//     }

//     const patient = await VaidyaService.validateUser(credentials.name, credentials.password);

//     if (!patient) {
//       setError('Invalid name or password.');
//       return;
//     }

//     if (isAdminLogin && patient.role === 'admin') {
//       alert(`Welcome, Admin ${credentials.name}!`);
//       // navigate('/userdashboard');
//       navigate('/adminboard');
//     } else if (!isAdminLogin && !patient.role) {
//       alert(`Welcome, ${credentials.name}!`); 
//       // navigate('/adminboard');
//       navigate('/userdashboard');

//       // navigate('/welcome');
//       // navigate('/manager');
//     } else {
//       setError('Unauthorized access.');
//     }
//   };

//   const handleForgotPassword = () => {
//     navigate('/ForgetPassword');
//   };

//   const toggleLoginType = (type) => {
//     setIsAdminLogin(type === 'admin');
//     setCredentials({ username: '', password: '' });
//     setError('');
//   };

//   return (
//     <div className="container">
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

//           .buttonGroup {
//             display: flex;
//             justify-content: flex-start;
//             gap: 10px;
//             margin-top: 20px;
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

//           .link {
//             text-decoration: none;
//             color: rgb(3, 97, 147);
//             font-size: 0.9rem;
//             cursor: pointer;
//           }

//           .link:hover {
//             text-decoration: underline;
//           }

//           .switchLinks {
//             margin-top: 20px;
//             text-align: center;
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

//       <h2 className="title">{isAdminLogin ? 'Admin Login' : 'User Login'}</h2>
//       <form onSubmit={handleLogin} className="form">
//         <label htmlFor="name">Name</label>
//         <input
//           name="name"
//           placeholder="Enter your name"
//           value={credentials.name}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//           value={credentials.password}
//           onChange={handleChange}
//           required
//         />
//         {error && <div className="error">{error}</div>}

//         <div className="buttonGroup">
//           <button type="submit">Login</button>
//           {/* <button type="submit" onClick={() => window.location.href = './manager'}>Login</button> */}

//           <span onClick={handleForgotPassword} className="link">Forgot Password</span>
//         </div>
//       </form>

//       <div className="switchLinks">
//         {isAdminLogin ? (
//           <>
//             Not an admin?{' '}
//             <span onClick={() => toggleLoginType('user')} className="link">
//               User Login
//             </span>
//           </>
//         ) : (
//           <>
//             Want to log in as an admin?{' '}
//             <span onClick={() => toggleLoginType('admin')} className="link">
//               Admin Login
//             </span>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginForm;






























































































































































// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import VaidyaService from './vaidyaService';  // Import the updated VaidyaService

// // const LoginForm = () => {
// //   const navigate = useNavigate();
// //   const [credentials, setCredentials] = useState({ name: '', password: '', role: '' });
// //   const [error, setError] = useState('');
// //   const [isAdminLogin, setIsAdminLogin] = useState(false);  // State to toggle between User and Admin login

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setCredentials({ ...credentials, [name]: value });
// //     setError('');
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     // Validate required fields
// //     if (!credentials.name || !credentials.password || (isAdminLogin && !credentials.role)) {
// //       setError('All fields are required.');
// //       return;
// //     }

// //     // Call VaidyaService to fetch the patient details based on the name and password
// //     const patient = await VaidyaService.validateUser(credentials.name, credentials.password);

// //     if (!patient) {
// //       setError('Invalid name or password.');
// //       return;
// //     }

// //     // Admin Login
// //     if (isAdminLogin && credentials.role === 'admin' && patient.role === 'admin') {
// //       alert(`Welcome, Admin ${credentials.name}!`);
// //       navigate('/manager');  // Redirect to the manager page for admin
// //     }
// //     // User Login
// //     else if (!isAdminLogin && patient.role === 'user') {
// //       alert(`Welcome, ${credentials.name}!`);
// //       navigate('/welcome');  // Redirect to the welcome page for users
// //     } else {
// //       setError('Invalid credentials or role.');
// //     }
// //   };

// //   const handleForgotPassword = () => {
// //     navigate('/ForgetPassword');
// //   };

// //   const toggleLoginType = (type) => {
// //     setIsAdminLogin(type === 'admin');
// //     setCredentials({ name: '', password: '', role: '' });  // Clear form when switching login type
// //     setError('');  // Reset error message
// //   };

// //   return (
// //     <div className="container">
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

// //           input, select {
// //             padding: 12px;
// //             margin: 8px 0;
// //             border: 1px solid #ccc;
// //             border-radius: 8px;
// //             font-size: 1rem;
// //             outline: none;
// //           }

// //           input:focus, select:focus {
// //             border-color: #0077b6;
// //             box-shadow: 0 0 5px rgba(0, 119, 182, 0.5);
// //           }

// //           .error {
// //             color: red;
// //             font-size: 0.9rem;
// //             margin-top: 10px;
// //           }

// //           .buttonGroup {
// //             display: flex;
// //             justify-content: flex-start;
// //             gap: 10px;
// //             margin-top: 20px;
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

// //           .link {
// //             text-decoration: none;
// //             color: rgb(3, 97, 147);
// //             font-size: 0.9rem;
// //           }

// //           .link:hover {
// //             text-decoration: underline;
// //           }

// //           .switchLinks {
// //             margin-top: 20px;
// //             text-align: center;
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

// //             input, select {
// //               width: 100%;
// //             }
// //           }
// //         `}
// //       </style>

// //       <h2 className="title">{isAdminLogin ? 'Admin Login' : 'User Login'}</h2>
// //       <form onSubmit={handleLogin} className="form">
// //         <label htmlFor="name">Name</label>
// //         <input
// //           name="name"
// //           placeholder="Enter your name"
// //           value={credentials.name}
// //           onChange={handleChange}
// //           required
// //         />

// //         <label htmlFor="password">Password</label>
// //         <input
// //           name="password"
// //           type="password"
// //           placeholder="Enter your password"
// //           value={credentials.password}
// //           onChange={handleChange}
// //           required
// //         />

// //         {/* Render the Role field only for Admin login */}
// //         {isAdminLogin && (
// //           <>
// //             <label htmlFor="role">Role</label>
// //             <select
// //               name="role"
// //               value={credentials.role}
// //               onChange={handleChange}
// //               required
// //             >
// //               <option value="">Select Role</option>
// //               <option value="admin">Admin</option>
// //             </select>
// //           </>
// //         )}

// //         {error && <div className="error">{error}</div>}

// //         <div className="buttonGroup">
// //           <button type="submit">Login</button>
// //           <a href="#" onClick={handleForgotPassword} className="link">Forgot Password</a>
// //         </div>
// //       </form>

// //       <div className="switchLinks">
// //         <span>
// //           {isAdminLogin ? (
// //             <>
// //               Not an admin?{' '}
// //               <a href="#" onClick={() => toggleLoginType('user')} className="link">
// //                 User Login
// //               </a>
// //             </>
// //           ) : (
// //             <>
// //               Want to log in as an admin?{' '}
// //               <a href="#" onClick={() => toggleLoginType('admin')} className="link">
// //                 Admin Login
// //               </a>
// //             </>
// //           )}
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginForm;






















































































































// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const LoginForm = () => {
// //   const navigate = useNavigate();
// //   const [credentials, setCredentials] = useState({ name: '', password: '', role: '' });
// //   const [error, setError] = useState('');
// //   const [isAdminLogin, setIsAdminLogin] = useState(false);  // State to toggle between User and Admin login

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setCredentials({ ...credentials, [name]: value });
// //     setError('');
// //   };

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     // Validate required fields
// //     if (!credentials.name || !credentials.password || (isAdminLogin && !credentials.role)) {
// //       setError('All fields are required.');
// //       return;
// //     }

// //     // Fetch stored credentials from localStorage
// //     const storedData = JSON.parse(localStorage.getItem('registeredUser'));

// //     if (!storedData) {
// //       setError('No registered user found. Please register first.');
// //       return;
// //     }

// //     //  Admin Login
// //     if (isAdminLogin && credentials.role === 'admin' && credentials.name === storedData.name && credentials.password === storedData.password) {
// //       alert(`Welcome, Admin ${credentials.name}!`);
      
// //     } 
// //     // Handle User Login
// //     else if (!isAdminLogin && credentials.name === storedData.name && credentials.password === storedData.password) {
// //       alert(`Welcome, ${credentials.name}!`);
      
// //       // User login logic here
// //     } else {
// //       setError('Invalid name, password, or role.');
// //     }
// //   };

// //   const handleForgotPassword = () => {
// //     navigate('/ForgetPassword');
// //   };

// //   const toggleLoginType = (type) => {
// //     setIsAdminLogin(type === 'admin');
// //     setCredentials({ name: '', password: '', role: '' });  // Clear form when switching login type
// //     setError('');  // Reset error message
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <style>
// //         {`
// //           input {
// //             padding: 10px;
// //             margin: 8px 0;
// //             border: 1px solid #ccc;
// //             border-radius: 8px;
// //             width: 100%;
// //             box-sizing: border-box;
// //             font-size: 1rem;
// //           }
// //           label {
// //             display: block;
// //             margin-top: 10px;
// //             font-size: 1rem;
// //           }
// //           button {
// //             padding: 10px 20px;
// //             margin-top: 20px;
// //             margin-right: 10px;
// //             font-size: 1rem;
// //             background-color: #0077b6;
// //             color: white;
// //             border: none;
// //             border-radius: 8px;
// //             cursor: pointer;
// //           }
// //           button:hover {
// //             background-color: #005f87;
// //           }
// //           .error {
// //             color: red;
// //             font-size: 0.9rem;
// //             margin-top: 10px;
// //           }
// //           .link {
// //             text-decoration: none;
// //             color: rgb(3, 97, 147);
// //           }
// //           .link:hover {
// //             text-decoration: underline;
// //           }
// //         `}
// //       </style>

// //       <h2 style={styles.title}>{isAdminLogin ? 'Admin Login' : 'User Login'}</h2>
// //       <form onSubmit={handleLogin} style={styles.form}>
// //         <label htmlFor="name">Name</label>
// //         <input
// //           name="name"
// //           placeholder="Enter your name"
// //           value={credentials.name}
// //           onChange={handleChange}
// //           required
// //         />

// //         <label htmlFor="password">Password</label>
// //         <input
// //           name="password"
// //           type="password"
// //           placeholder="Enter your password"
// //           value={credentials.password}
// //           onChange={handleChange}
// //           required
// //         />

// //         {/* Render the Role field only for Admin login */}
// //         {isAdminLogin && (
// //           <>
// //             <label htmlFor="role">Role</label>
// //             <select
// //               name="role"
// //               value={credentials.role}
// //               onChange={handleChange}
// //               required
// //             >
// //               <option value="">Select Role</option>
// //               <option value="admin">Admin</option>
// //             </select>
// //           </>
// //         )}

// //         {error && <div className="error">{error}</div>}

// //         <div style={styles.buttonGroup}>
// //           <button type="submit" onClick={()=>window.location.href='/manager'}>Login</button>
            
// //           <a href="#" onClick={handleForgotPassword} className="link">Forgot Password
// //           </a>
// //         </div>
// //       </form>

// //       <div style={styles.switchLinks}>
// //         <span>
// //           {isAdminLogin ? (
// //             <>
// //               Not an admin?{' '}
// //               <a href="#" onClick={() => toggleLoginType('user')} className="link">
// //                 User Login
// //               </a>
// //             </>
// //           ) : (
// //             <>
// //               Want to log in as an admin?{' '}
// //               <a href="#" onClick={() => toggleLoginType('admin')} className="link">
// //                 Admin Login
// //               </a>
// //             </>
// //           )}
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     maxWidth: '400px',
// //     margin: '60px auto',
// //     padding: '30px',
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: '12px',
// //     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
// //     fontFamily: 'Segoe UI, sans-serif',
// //   },
// //   title: {
// //     textAlign: 'center',
// //     marginBottom: '20px',
// //     color: '#0077b6',
// //   },
// //   form: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   buttonGroup: {
// //     display: 'flex',
// //     justifyContent: 'flex-start',
// //     gap: '10px',
// //   },
// //   switchLinks: {
// //     marginTop: '20px',
// //     textAlign: 'center',
// //   },
// // };

// // export default LoginForm;









































































































































































