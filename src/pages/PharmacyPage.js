import React, { useState } from 'react';

const PharmacyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    { id: 1, name: 'Paracetamol', quantity: 50 },
    { id: 2, name: 'Ibuprofen', quantity: 30 },
    { id: 3, name: 'Amoxicillin', quantity: 20 },
    { id: 4, name: 'Cetirizine', quantity: 40 },
    { id: 5, name: 'Azithromycin', quantity: 15 },
  ];

  // Filter items by search
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <div style={styles.header}>
          <h2 style={styles.title}>Pharmacy Inventory</h2>
          <input
            type="text"
            placeholder="Search medicine..."
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

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
              {filteredItems.length > 0 ? (
                filteredItems.map((med) => (
                  <tr key={med.id} style={styles.row}>
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
    </div>
  );
};

// 🎨 Styles with background image and overlay
const styles = {
  page: {
  marginLeft: '220px',
  fontFamily: 'Segoe UI, sans-serif',
  minHeight: '100vh',
  backgroundImage: 'url("https://images.unsplash.com/photo-1588776814546-ec7d2daae7db?auto=format&fit=crop&w=1350&q=80")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  padding: '30px',
  color: 'white',
},

  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    minHeight: '100vh',
    padding: '30px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '28px',
    background: 'linear-gradient(to right, #0066cc, #00ccff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  },
  searchInput: {
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    outline: 'none',
    width: '220px',
    fontSize: '14px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    padding: '20px',
    overflowX: 'auto',
    color: '#000'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#0077b6',
    color: 'white',
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #eee',
  },
  row: {
    transition: 'background-color 0.2s ease',
  },
  noData: {
    padding: '20px',
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  }
};

export default PharmacyPage;
