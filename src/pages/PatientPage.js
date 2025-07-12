import React, { useState } from 'react';
import PatientCard from '../components/PatientCard';

const PatientPage = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', gender: '', condition: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...patients];
      updated[editIndex] = formData;
      setPatients(updated);
      setEditIndex(null);
    } else {
      setPatients([...patients, formData]);
    }
    setFormData({ name: '', age: '', gender: '', condition: '' });
  };

  const handleDelete = (index) => {
    const updated = [...patients];
    updated.splice(index, 1);
    setPatients(updated);
  };

  const handleEdit = (index) => {
    setFormData(patients[index]);
    setEditIndex(index);
  };

  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f0f2f5',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif'
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#af4caaff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          {editIndex !== null ? 'Edit Patient' : 'Add Patient'}
        </h2>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="condition"
          placeholder="Condition"
          value={formData.condition}
          onChange={handleChange}
          required
        />
        <button type="submit" style={buttonStyle}>
          {editIndex !== null ? 'Update Patient' : 'Add Patient'}
        </button>
      </form>

      <div style={{ marginTop: '30px' }}>
        {patients.map((patient, index) => (
          <PatientCard
            key={index}
            patient={patient}
            onDelete={() => handleDelete(index)}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientPage;



