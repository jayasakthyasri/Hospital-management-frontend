// src/pages/BillingPage.js

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
      id: Date.now(),
      ...formData,
      amount: parseFloat(formData.amount),
    };
    setBillingData((prev) => [...prev, newEntry]);
    setFormData({ patientName: "", service: "", amount: "" });
  };

  return (
    <div style={styles.container}>
      <h2>Billing Page</h2>

      {/* Billing Info Form */}
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
        <button type="submit" style={styles.button}>
          Add Billing Info
        </button>
      </form>

      {/* Dummy Billing Table */}
      <h3>Billing Records</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Service</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {billingData.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.patientName}</td>
              <td>{bill.service}</td>
              <td>{bill.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    flex: "1 1 200px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "1px solid #ccc",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    borderBottom: "1px solid #eee",
    padding: "10px",
  },
};

export default BillingPage;
