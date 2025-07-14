import React, { useState } from "react";

const BillingPage = () => {
  const [billingData, setBillingData] = useState([
    {
      id: 1,
      patientName: "Ravi Kumar",
      service: "X-Ray",
      amount: 500,
    },
    {
      id: 2,
      patientName: "Priya Sharma",
      service: "Blood Test",
      amount: 300,
    },
  ]);

  const [nextId, setNextId] = useState(3); // Start from 3 since 1 and 2 already exist

  const [formData, setFormData] = useState({
    patientName: "",
    service: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: nextId,
      ...formData,
      amount: parseFloat(formData.amount),
    };
    setBillingData((prev) => [...prev, newEntry]);
    setNextId((prev) => prev + 1); // Increment ID for next entry
    setFormData({ patientName: "", service: "", amount: "" });
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>💳 Billing Management</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="service"
          placeholder="Service Rendered"
          value={formData.service}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          value={formData.amount}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Billing Info</button>
      </form>

      <div style={styles.card}>
        <h3 style={{ color: '#003366' }}>Billing Records</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Patient Name</th>
              <th style={styles.th}>Service</th>
              <th style={styles.th}>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {billingData.map((bill) => (
              <tr key={bill.id}>
                <td style={styles.td}>{bill.id}</td>
                <td style={styles.td}>{bill.patientName}</td>
                <td style={styles.td}>{bill.service}</td>
                <td style={styles.td}>{bill.amount}</td>
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
    marginLeft: "220px",
    padding: "40px",
    minHeight: "100vh",
    backgroundColor: "#e6f2ff",
    fontFamily: '"Libertinus Mono", monospace',
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#003366",
    textShadow: "1px 1px 2px #b3d9ff",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "25px",
  },
  input: {
    padding: "10px",
    flex: "1 1 220px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0077b6",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },
  th: {
    backgroundColor: "#0077b6",
    color: "#fff",
    padding: "12px",
    textAlign: "left",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #eee",
  },
};

export default BillingPage;
