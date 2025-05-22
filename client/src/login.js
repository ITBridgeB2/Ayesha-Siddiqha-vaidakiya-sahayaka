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

























































































































