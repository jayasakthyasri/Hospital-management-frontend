import React from 'react';

const PatientCard = ({ patient, onDelete, onEdit }) => {
  const cardStyle = {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const infoStyle = {
    flex: 1
  };

  const buttonStyle = {
    marginLeft: '10px',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={cardStyle}>
      <div style={infoStyle}>
        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{patient.name}</div>
        <div>Age: {patient.age}</div>
        <div>Gender: {patient.gender}</div>
        <div>Condition: {patient.condition}</div>
      </div>
      <div>
        <button
          style={{ ...buttonStyle, backgroundColor: '#007bff', color: 'white' }}
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: '#dc3545', color: 'white' }}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
