import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [role, setrole] = useState('admin');
  const navigate = useNavigate();

   const handleRegister = async (e) => {
    e.preventDefault();

    // check if user already exists
    const existingUser = await axios.get(`http://localhost:5000/users`, {
      params: { username }
    });

    if (existingUser.data.length > 0) {
      alert('Username already taken');
      return;
    }

    await axios.post('http://localhost:5000/users', {
      username,
      password,
      email,
      role
    });

    alert('Registration successful!');
    if (role === "admin") navigate("/dashboard");
  else if (role === "doctor") navigate("/dashboard/pharmacy");
  else if (role === "receptionist") navigate("/dashboard/appointments");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Hospital Registration</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            style={styles.input}
          />

          <select
            value={role}
            onChange={(e) => setrole(e.target.value)}
            style={styles.select}>

            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="receptionist">Receptionist</option>
           
          </select>

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <p style={styles.linkText}>
          Already have an account?{' '}
          <Link to="/" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
}

// 💙 Blue theme and font matching Pharmacy & Login
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#e6f2ff',
    fontFamily: '"Libertinus Mono", monospace',
  },
  card: {
    background: '#ffffff',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    width: '350px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1.8rem',
    fontSize: '24px',
    color: '#003366',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px #b3d9ff',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  select: {
    width: '100%',
    padding: '12px',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '12px',
    background: '#0077b6',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  linkText: {
    marginTop: '1rem',
    fontSize: '14px',
    color: '#444',
  },
  link: {
    color: '#0077b6',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
