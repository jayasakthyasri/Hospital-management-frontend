
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import PatientPage from './pages/PatientPage';
import AppointmentPage from './pages/AppointmentPage';
import BillingPage from './pages/BillingPage';

import PharmacyPage from './pages/PharmacyPage';
import LabPage from './pages/LabPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Friends' Pages */}
        <Route path="/patients" element={<PatientPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/billing" element={<BillingPage />} />

        {/* Your Pages */}
        <Route path="/pharmacy" element={<PharmacyPage />} />
        <Route path="/lab" element={<LabPage />} />
      </Routes>
    </Router>
  );
}

export default App;
