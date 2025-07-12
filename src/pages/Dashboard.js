import React from 'react';


const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to the Hospital Dashboard</h2>
      <p style={styles.subtitle}>Select a module to manage:</p>

      <div style={styles.card}>
        <ul style={styles.list}>
          <li>🧑‍⚕️ Patients</li>
          <li>📅 Appointments</li>
          <li>💊 Pharmacy</li>
          <li>🧪 Lab Reports</li>
          <li>💵 Billing</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    textAlign: 'center',
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
};

export default Dashboard;
