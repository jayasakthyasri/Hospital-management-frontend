import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
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
              <li style={styles.clickable}>🧑 Patients</li>
              <li style={styles.clickable}>📅 Appointments</li>
              <li style={styles.clickable}>💊 Pharmacy</li>
              <li style={styles.clickable}>🧪 Lab Reports</li>
              <li style={styles.clickable}>💵 Billing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    paddingTop: '80px',
    paddingLeft: '50px',
    backgroundColor: '#e6f2ff', // light blue
    minHeight: '100vh',
    flex: 1,
    textAlign: 'center',
  },
  title: {
    fontSize: '30px',
    color: '#004080',
    marginBottom: '10px',
    textShadow: '1px 1px 2px #ccc',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  card: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    fontSize: '17px',
    lineHeight: '2.5',
  },
  clickable: {
    cursor: 'pointer',
    color: '#0066cc',
    fontWeight: '500',
  }
};

export default Dashboard;
