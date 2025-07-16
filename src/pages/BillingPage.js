import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const BillingPage = () => {
  const [billingData, setBillingData] = useState(() => {
    const storedData = localStorage.getItem("billingData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [formData, setFormData] = useState({
    patientName: "",
    service: "",
    amount: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Save to localStorage on every update
  useEffect(() => {
    localStorage.setItem("billingData", JSON.stringify(billingData));
  }, [billingData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = billingData.some(
      (item) =>
        item.patientName.toLowerCase().trim() === formData.patientName.toLowerCase().trim() &&
        item.service.toLowerCase().trim() === formData.service.toLowerCase().trim() &&
        parseFloat(item.amount) === parseFloat(formData.amount) &&
        item.id !== editingId
    );

    if (isDuplicate) {
      alert("Billing entry already exists!");
      return;
    }

    const updatedEntry = {
      id: editingId !== null ? editingId : billingData.length + 1,
      ...formData,
      amount: parseFloat(formData.amount),
    };

    let updatedData;
    if (editingId !== null) {
      updatedData = billingData.map((item) =>
        item.id === editingId ? updatedEntry : item
      );
    } else {
      updatedData = [...billingData, updatedEntry];
    }

    // Reassign IDs after add/edit
    const reindexedData = updatedData.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    setBillingData(reindexedData);
    setEditingId(null);
    setFormData({ patientName: "", service: "", amount: "" });
  };

  const handleEdit = (entry) => {
    setFormData({
      patientName: entry.patientName,
      service: entry.service,
      amount: entry.amount,
    });
    setEditingId(entry.id);
  };

  const handleDelete = (id) => {
    const updatedData = billingData
      .filter((item) => item.id !== id)
      .map((item, index) => ({ ...item, id: index + 1 }));

    setBillingData(updatedData);
    setEditingId(null);
    setFormData({ patientName: "", service: "", amount: "" });
  };

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
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
            <button type="submit" style={styles.button}>
              {editingId !== null ? "Update Billing Info" : "Add Billing Info"}
            </button>
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
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {billingData.map((bill) => (
                  <tr key={bill.id}>
                    <td style={styles.td}>{bill.id}</td>
                    <td style={styles.td}>{bill.patientName}</td>
                    <td style={styles.td}>{bill.service}</td>
                    <td style={styles.td}>{bill.amount}</td>
                    <td style={styles.td}>
                      <button
                        onClick={() => handleEdit(bill)}
                        style={{
                          ...styles.button,
                          backgroundColor: "#ffb703",
                          marginRight: "10px",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(bill.id)}
                        style={{ ...styles.button, backgroundColor: "#d62828" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  page: {
    width: "100%",
    padding: "40px",
    Height: "100vh",
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




