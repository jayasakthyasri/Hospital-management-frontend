import React, { useState, useEffect } from 'react';

const PatientPage = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', gender: '', condition: '', report: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients') || '[]');
    setPatients(storedPatients);
    const maxId = storedPatients.reduce((max, p) => Math.max(max, p.id || 0), 0);
    setNextId(maxId + 1);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedPatients;
    if (editIndex !== null) {
      updatedPatients = [...patients];
      updatedPatients[editIndex] = { ...updatedPatients[editIndex], ...formData };
      setEditIndex(null);
    } else {
      const newPatient = { id: nextId, ...formData };
      updatedPatients = [...patients, newPatient];
      setNextId(nextId + 1);
    }

    setPatients(updatedPatients);
    localStorage.setItem('patients', JSON.stringify(updatedPatients));
    setFormData({ name: '', age: '', gender: '', condition: '', report: '' });
  };

  const handleDelete = (index) => {
    const updated = [...patients];
    updated.splice(index, 1);
    setPatients(updated);
    localStorage.setItem('patients', JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    setFormData(patients[index]);
    setEditIndex(index);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>{editIndex !== null ? 'Edit Patient' : 'Add Patient'}</h2>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={styles.input} />
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} required style={styles.input} />
        <input name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required style={styles.input} />
        <input name="condition" placeholder="Condition" value={formData.condition} onChange={handleChange} required style={styles.input} />
        <input name="report" placeholder="Report Name (optional)" value={formData.report} onChange={handleChange} style={styles.input} />
        <button type="submit" style={styles.button}>{editIndex !== null ? 'Update' : 'Add Patient'}</button>
      </form>

      <div style={styles.list}>
        <h3>Patients</h3>
        {patients.map((p, i) => (
          <div key={p.id} style={styles.card}>
            <strong>ID:</strong> {p.id} — <strong>{p.name}</strong> ({p.gender}, {p.age})<br />
            <strong>Condition:</strong> {p.condition}<br />
            <strong>Report:</strong> {p.report || 'N/A'}
            <div>
              <button onClick={() => handleEdit(i)} style={styles.edit}>Edit</button>
              <button onClick={() => handleDelete(i)} style={styles.delete}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '40px', backgroundColor: '#e6f2ff', minHeight: '100vh' },
  form: { backgroundColor: '#fff', padding: '20px', borderRadius: '10px', maxWidth: '500px', margin: 'auto' },
  input: { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' },
  button: { width: '100%', padding: '10px', backgroundColor: '#0077b6', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' },
  heading: { textAlign: 'center', marginBottom: '20px' },
  list: { marginTop: '40px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' },
  card: { background: '#fff', padding: '15px', marginBottom: '15px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' },
  edit: { marginRight: '10px', backgroundColor: 'green', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' },
  delete: { backgroundColor: 'red', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' },
};

export default PatientPage;
