import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';

export default function Login() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [role,setrole] = useState('admin');

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();
      alert(`Login successfull!`)
      
      navigate('/dashboard')
      
    }



  return (
     <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Hospital Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
            style={styles.input}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            style={styles.input}
          />

          {/* Role Dropdown */}
          <select
            value={role}
            onChange={(e) => setrole(e.target.value)}
            style={styles.select}
          >
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="receptionist">Receptionist</option>
            <option value="patient">Patient</option>
          </select>

          {/* Submit Button */}
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p> Dont have an account? <Link to="/register">Register now!</Link></p>

      </div>
    </div>
  );
};

// ✨ Styling (Inline Style Object)
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f2f2f2',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1.5rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    background: 'purple',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

