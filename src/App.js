
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import PatientPage from './pages/PatientPage'; // Import it

import AppointmentPage from './pages/AppointmentPage'; 
import BillingPage from './pages/BillingPage';// ✅ import it




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/patients" element={<PatientPage />} /> 
        <Route path="/appointments" element={<AppointmentPage />} /> 


        <Route path="/billing" element={<BillingPage />} />

      </Routes>
    </Router>
  );
}

export default App;
        
