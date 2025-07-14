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
          <h2 style={styles.title}>Welcome to HEXOSPITAL's Admin Panel</h2>
          <p style={styles.subtitle}>You Choose , We help you, we make you happy</p>

          <div style={styles.cardContainer}>
            <div style={styles.card}>
              <h3>Total Patients</h3>
              <p>128</p>
            </div>
            <div style={styles.card}>
              <h3>Appointments Today</h3>
              <p>32</p>
            </div>
            <div style={styles.card}>
              <h3>Doctors Available</h3>
              <p>12</p>
            </div>
          </div>

          <p style={styles.footer}>Empowering healthcare through technology 💙</p>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    paddingTop: '80px',
    paddingLeft: '50px',
    backgroundColor: '#e6f2ff',
    minHeight: '100vh',
    flex: 1,
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    color: '#004080',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '1.5rem 2rem',
    width: '220px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
  },
  footer: {
    fontSize: '14px',
    color: '#777',
    marginTop: '2rem',
  }
};

export default Dashboard;
