import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={styles.container}>
          <h2 style={styles.title}>🏥 Welcome to the Hospital Management System</h2>
          <p style={styles.subtitle}>Choose a module to manage</p>

          <div style={styles.card}>
            <ul style={styles.menu}>
              <li style={styles.item} onClick={() => navigate('/patients')}>🧑‍⚕️ Patients</li>
              <li style={styles.item} onClick={() => navigate('/appointments')}>📅 Appointments</li>
              <li style={styles.item} onClick={() => navigate('/pharmacy')}>💊 Pharmacy</li>
              <li style={styles.item} onClick={() => navigate('/lab')}>🧪 Lab</li>
              <li style={styles.item} onClick={() => navigate('/billing')}>💵 Billing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: '50px 30px',
    backgroundColor: '#e6f2ff',
    minHeight: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    color: '#003366',
    marginBottom: '10px',
    fontFamily: 'Libertinus Mono, sans-serif',
    textShadow: '1px 1px 2px #b3d9ff',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  card: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '25px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    fontSize: '18px',
    lineHeight: '2.5',
  },
  item: {
    cursor: 'pointer',
    color: '#0077cc',
    transition: 'color 0.3s',
  },
};

export default Dashboard;
