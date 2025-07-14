import React, { useEffect, useState } from 'react';

const LabPage = () => {
  const [patients, setPatients] = useState([]);
  const [labReports, setLabReports] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients') || '[]');
    const reports = storedPatients
      .filter(p => p.report && p.report.trim() !== '')
      .map(p => ({
        id: p.id,
        name: p.name,
        report: p.report,
        status: 'Pending',
      }));
    setPatients(storedPatients);
    setLabReports(reports);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    const updated = labReports.map((r) => (r.id === id ? { ...r, status: newStatus } : r));
    setLabReports(updated);
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>🧪 Lab Reports</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Patient ID</th>
            <th style={styles.th}>Patient Name</th>
            <th style={styles.th}>Report</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Update</th>
          </tr>
        </thead>
        <tbody>
          {labReports.map((r) => (
            <tr key={r.id}>
              <td style={styles.td}>{r.id}</td>
              <td style={styles.td}>{r.name}</td>
              <td style={styles.td}>{r.report}</td>
              <td style={styles.td}>
                <select
                  value={r.status}
                  onChange={(e) => handleStatusChange(r.id, e.target.value)}
                  style={styles.select}
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td style={styles.td}>
                <span style={{ color: r.status === 'Completed' ? 'green' : '#e67e22', fontWeight: 'bold' }}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  page: { marginLeft: '220px', padding: '40px', minHeight: '100vh', backgroundColor: '#e6f2ff', fontFamily: 'Libertinus Mono, sans-serif' },
  title: { fontSize: '28px', marginBottom: '20px', color: '#003366', textShadow: '1px 1px 2px #b3d9ff' },
  table: { width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' },
  th: { backgroundColor: '#0096c7', color: '#fff', padding: '12px', textAlign: 'left' },
  td: { padding: '12px', borderBottom: '1px solid #eee' },
  select: { padding: '6px', borderRadius: '4px', border: '1px solid #ccc' },
};

export default LabPage;
