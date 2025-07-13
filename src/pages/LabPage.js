import React, { useState } from 'react';

const LabPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const labTests = [
    { id: 1, name: 'Blood Test', status: 'Completed' },
    { id: 2, name: 'X-Ray', status: 'Pending' },
    { id: 3, name: 'Urine Test', status: 'Completed' },
    { id: 4, name: 'MRI Scan', status: 'Scheduled' },
    { id: 5, name: 'COVID-19 Test', status: 'Completed' },
  ];

  const filteredTests = labTests.filter((test) =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2 style={styles.title}>Lab Reports</h2>
        <input
          type="text"
          placeholder="Search test..."
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
              <th style={styles.th}>Test Name</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTests.length > 0 ? (
              filteredTests.map((test) => (
                <tr key={test.id}>
                  <td style={styles.td}>{test.id}</td>
                  <td style={styles.td}>{test.name}</td>
                  <td style={styles.td}>{test.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={styles.noData}>No lab tests found.</td>
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
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '28px',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
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
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    padding: '20px',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#003366',
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
  noData: {
    padding: '20px',
    textAlign: 'center',
    color: '#777',
    fontStyle: 'italic',
  }
};

export default LabPage;
