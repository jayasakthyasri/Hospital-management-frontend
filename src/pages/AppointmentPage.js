import React, { useState } from 'react';

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "John Doe", date: "2025-07-15", time: "10:00 AM", reason: "Checkup", status: "Confirmed", doctor: "Dr. Smith" },
    { id: 2, patientName: "Jane Smith", date: "2025-07-16", time: "11:00 AM", reason: "Fever", status: "Pending", doctor: "Dr. Adams" },
    { id: 3, patientName: "Robert Brown", date: "2025-07-17", time: "01:00 PM", reason: "Follow-up", status: "Confirmed", doctor: "Dr. Lee" },
    { id: 4, patientName: "Alice Johnson", date: "2025-07-18", time: "09:30 AM", reason: "Back Pain", status: "Cancelled", doctor: "Dr. Cooper" },
    { id: 5, patientName: "Michael Green", date: "2025-07-19", time: "03:00 PM", reason: "Headache", status: "Confirmed", doctor: "Dr. Wilson" },
    { id: 6, patientName: "Laura White", date: "2025-07-20", time: "04:00 PM", reason: "Diabetes", status: "Pending", doctor: "Dr. Evans" },
    { id: 7, patientName: "David King", date: "2025-07-21", time: "10:30 AM", reason: "Blood Test", status: "Confirmed", doctor: "Dr. Carter" },
    { id: 8, patientName: "Emma Thomas", date: "2025-07-22", time: "02:30 PM", reason: "Skin Rash", status: "Confirmed", doctor: "Dr. Hughes" },
    { id: 9, patientName: "Daniel Garcia", date: "2025-07-23", time: "12:00 PM", reason: "Migraine", status: "Cancelled", doctor: "Dr. Walker" },
    { id: 10, patientName: "Sophia Martinez", date: "2025-07-24", time: "11:45 AM", reason: "Allergy", status: "Confirmed", doctor: "Dr. Young" },
    { id: 11, patientName: "William Harris", date: "2025-07-25", time: "09:00 AM", reason: "Vaccination", status: "Pending", doctor: "Dr. Lee" },
    { id: 12, patientName: "Olivia Clark", date: "2025-07-26", time: "01:15 PM", reason: "Cold", status: "Confirmed", doctor: "Dr. Baker" },
    { id: 13, patientName: "James Lewis", date: "2025-07-27", time: "02:00 PM", reason: "Joint Pain", status: "Confirmed", doctor: "Dr. Murphy" },
    { id: 14, patientName: "Mia Hall", date: "2025-07-28", time: "03:45 PM", reason: "X-Ray", status: "Pending", doctor: "Dr. Moore" },
    { id: 15, patientName: "Benjamin Allen", date: "2025-07-29", time: "04:30 PM", reason: "Asthma", status: "Confirmed", doctor: "Dr. Rivera" },
    { id: 16, patientName: "Charlotte Young", date: "2025-07-30", time: "10:15 AM", reason: "Throat Pain", status: "Confirmed", doctor: "Dr. Price" },
    { id: 17, patientName: "Lucas Scott", date: "2025-07-31", time: "12:30 PM", reason: "Ear Checkup", status: "Cancelled", doctor: "Dr. Bell" },
    { id: 18, patientName: "Amelia Turner", date: "2025-08-01", time: "01:45 PM", reason: "Ultrasound", status: "Pending", doctor: "Dr. Foster" },
    { id: 19, patientName: "Henry Collins", date: "2025-08-02", time: "02:20 PM", reason: "CT Scan", status: "Confirmed", doctor: "Dr. Cox" },
    { id: 20, patientName: "Evelyn Ramirez", date: "2025-08-03", time: "03:50 PM", reason: "Flu", status: "Confirmed", doctor: "Dr. Hayes" }
  ]);

  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    date: '',
    time: '',
    reason: '',
    status: '',
    doctor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...newAppointment,
      id: appointments.length + 1
    };
    setAppointments([...appointments, newEntry]);
    setNewAppointment({
      patientName: '',
      date: '',
      time: '',
      reason: '',
      status: '',
      doctor: ''
    });
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>📅 Schedule New Appointment</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="patientName"
          placeholder="Patient Name"
          value={newAppointment.patientName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="date"
          type="date"
          value={newAppointment.date}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="time"
          type="time"
          value={newAppointment.time}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="reason"
          placeholder="Reason"
          value={newAppointment.reason}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <select
          name="status"
          value={newAppointment.status}
          onChange={handleChange}
          required
          style={styles.select}
        >
          <option value="">Select Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          name="doctor"
          placeholder="Doctor Name"
          value={newAppointment.doctor}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Add Appointment
        </button>
      </form>

      <div style={styles.card}>
        <h3 style={{ color: '#003366' }}>📋 Scheduled Appointments</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Patient Name</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Reason</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Doctor</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id}>
                <td style={styles.td}>{appt.id}</td>
                <td style={styles.td}>{appt.patientName}</td>
                <td style={styles.td}>{appt.date}</td>
                <td style={styles.td}>{appt.time}</td>
                <td style={styles.td}>{appt.reason}</td>
                <td style={styles.td}>{appt.status}</td>
                <td style={styles.td}>{appt.doctor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  page: {
    marginLeft: '220px',
    padding: '40px',
    minHeight: '100vh',
    backgroundColor: '#e6f2ff',
    fontFamily: '"Libertinus Mono", monospace',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#003366',
    textShadow: '1px 1px 2px #b3d9ff',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '25px',
  },
  input: {
    padding: '10px',
    flex: '1 1 220px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  select: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    flex: '1 1 220px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0077b6',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  },
  th: {
    backgroundColor: '#0077b6',
    color: '#fff',
    padding: '12px',
    textAlign: 'left',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #eee',
  },
};

export default AppointmentPage;