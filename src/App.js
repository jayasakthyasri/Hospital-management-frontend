import './App.css';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PharmacyPage from './pages/PharmacyPage';
import LabPage from './pages/LabPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pharmacy" element={<PharmacyPage />} />
        <Route path="/lab" element={<LabPage />} />
      </Routes>
    </Router>
  );
}

export default App;
