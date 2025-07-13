import React from 'react';

const labReports = [
  { id: 1, name: 'Blood Test', status: 'Completed' },
  { id: 2, name: 'X-Ray', status: 'Pending' },
  { id: 3, name: 'MRI', status: 'Completed' },
  { id: 4, name: 'COVID-19 Test', status: 'Completed' },
  { id: 5, name: 'ECG', status: 'Pending' },
];

const LabPage = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>🧪 Lab Reports</h2>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Report ID</th>
              <th style={styles.th}>Test Name</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {labReports.map((report) => (
              <tr key={report.id}>
                <td style={styles.td}>{report.id}</td>
                <td style={styles.td}>{report.name}</td>
                <td style={styles.td}>
                  <span style={{
                    color: report.status === 'Completed' ? 'green' : '#e67e22',
                    fontWeight: 'bold'
                  }}>
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
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
  card: {
    backgroundColor: '#fff',
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
    backgroundColor: '#0096c7',
    color: '#fff',
    padding: '12px',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #eee',
  },
};

export default LabPage;
