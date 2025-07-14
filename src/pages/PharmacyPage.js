import React, { useState } from 'react';

const PharmacyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const medicines = [
    { id: 1, name: 'Paracetamol', quantity: 100 },
    { id: 2, name: 'Ibuprofen', quantity: 50 },
    { id: 3, name: 'Amoxicillin', quantity: 30 },
    { id: 4, name: 'Cetirizine', quantity: 40 },
    { id: 5, name: 'Azithromycin', quantity: 25 },
  ];

  const filtered = medicines.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>💊 Pharmacy Inventory</h2>
      <input
        type="text"
        placeholder="Search medicine..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.search}
      />

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Medicine</th>
              <th style={styles.th}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((med) => (
                <tr key={med.id}>
                  <td style={styles.td}>{med.id}</td>
                  <td style={styles.td}>{med.name}</td>
                  <td style={styles.td}>{med.quantity}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={styles.noData}>No medicines found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  page: {
    marginLeft: '220px',
    padding: '40px',
    minHeight: '100vh',
    backgroundColor: '#e6f2ff',
    fontFamily: 'Libertinus Mono, sans-serif',
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#003366',
    textShadow: '1px 1px 2px #b3d9ff',
  },
  search: {
    padding: '10px',
    width: '250px',
    marginBottom: '25px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    backgroundColor: '#0077b6',
    color: '#fff',
    padding: '12px',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #eee',
  },
  noData: {
    textAlign: 'center',
    padding: '20px',
    color: '#999',
  },
};

export default PharmacyPage;
