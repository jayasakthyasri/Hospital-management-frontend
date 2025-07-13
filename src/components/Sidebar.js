import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Create this if you want to style the sidebar

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Hospital Admin</h2>
      <ul>
        <li>
          <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/patients" className="sidebar-link">Patients</Link>
        </li>
        <li>
          <Link to="/appointments" className="sidebar-link">Appointments</Link>
        </li>
        <li>
          <Link to="/doctors" className="sidebar-link">Doctors</Link>
        </li>
        <li>
          <Link to="/billing" className="sidebar-link">Billing</Link>
        </li>
        <li>
          <Link to="/" className="sidebar-link">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
