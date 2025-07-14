import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Hospital Admin</h2>
      <ul className="sidebar-menu">
        <li onClick={() => navigate('/dashboard')}>🏠 Dashboard</li>
        <li onClick={() => navigate('/patients')}>🧑‍⚕️ Patients</li>
        <li onClick={() => navigate('/appointments')}>📅 Appointments</li>
        <li onClick={() => navigate('/pharmacy')}>💊 Pharmacy</li>
        <li onClick={() => navigate('/lab')}>🧪 Lab</li>
        <li onClick={() => navigate('/billing')}>💵 Billing</li>
        <li onClick={() => navigate('/')}>🚪 Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
