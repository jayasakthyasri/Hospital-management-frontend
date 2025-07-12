import React from 'react';

const PatientCard = ({ patient }) => {
return (
<div style={{
border: '2px solid #007bff',
borderRadius: '8px',
padding: '12px',
margin: '10px 0',
background: '#f9f9f9'
}}>
<h3>{patient.name}</h3>
<p>Age: {patient.age}</p>
<p>Contact: {patient.contact}</p>
</div>
);
};

export default PatientCard;
