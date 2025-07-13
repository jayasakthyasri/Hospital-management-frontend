import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const navigate = useNavigate();

  const handlePatientsClick = () => {
    navigate('/patients');
  };

  const goToBilling = () => {
    navigate('/billing');
  };

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={styles.container}>
          <h2 style={styles.title}>Welcome to the Hospital Dashboard</h2>
          <p style={styles.subtitle}>Select a module to manage:</p>
          <div style={styles.card}>
            <ul style={styles.list}>
              <li onClick={handlePatientsClick} style={styles.linkItem}>🧑‍⚕️ Patients</li>
              <li onClick={() => navigate('/appointments')} style={styles.linkItem}>📅 Appointments</li>
              <li onClick={() => navigate('/pharmacy')} style={styles.linkItem}>💊 Pharmacy</li>
              <li onClick={() => navigate('/lab')} style={styles.linkItem}>🧪 Lab Reports</li>
              <li onClick={goToBilling} style={styles.linkItem}>💵 Billing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    textAlign: 'center',
    flex: 1,
  },
  title: {
    fontSize: '28px',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '1rem',
  },
  card: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    fontSize: '16px',
    lineHeight: '2',
    color: '#333',
  },
  linkItem: {
    cursor: 'pointer',
    color: '#3498db',
  },
};

export default Dashboard;
