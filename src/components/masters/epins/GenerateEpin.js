import React, { useState } from "react";

const MemberDetailsForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    address: "",
    mobile: "",
    joiningOption: "",
    desc: "",
    price: "",
    bv: "",
    noOfEpin: "",
    modeOfPayment: "",
    referenceNo: "",
    amount: "",
    paymentDate: "",
    bankName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleCancel = () => {
    setFormData({
      userId: "",
      name: "",
      address: "",
      mobile: "",
      joiningOption: "",
      desc: "",
      price: "",
      bv: "",
      noOfEpin: "",
      modeOfPayment: "",
      referenceNo: "",
      amount: "",
      paymentDate: "",
      bankName: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Generate E-Pin</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <section style={styles.section}>
          <h3 style={styles.sectionHeader}>Member Details</h3>
          <div style={styles.grid}>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>User ID:</label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                placeholder="Enter user ID"
                style={styles.input}
              />
            </div>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>Name*:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                style={styles.input}
              />
            </div>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>Address*:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                style={styles.textarea}
              />
            </div>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>Mobile:</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                style={styles.input}
              />
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sectionHeader}>Joining Option Details</h3>
          <div style={styles.grid}>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>Joining Option*:</label>
              <select
                name="joiningOption"
                value={formData.joiningOption}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="">--Select--</option>
                <option value="Option1">Option 1</option>
                <option value="Option2">Option 2</option>
              </select>
            </div>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>Price:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                style={styles.input}
              />
            </div>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>BV:</label>
              <input
                type="text"
                name="bv"
                value={formData.bv}
                onChange={handleChange}
                placeholder="Enter BV"
                style={styles.input}
              />
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sectionHeader}>Payment Details</h3>
          <div style={styles.grid}>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>No of E-pin*:</label>
              <input
                type="text"
                name="noOfEpin"
                value={formData.noOfEpin}
                onChange={handleChange}
                placeholder="Enter no. of E-pins"
                style={styles.input}
              />
            </div>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>Mode of Payment*:</label>
              <select
                name="modeOfPayment"
                value={formData.modeOfPayment}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="">--Mode--</option>
                <option value="Cash">Cash</option>
                <option value="Online">Online</option>
              </select>
            </div>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>Reference No.:</label>
              <input
                type="text"
                name="referenceNo"
                value={formData.referenceNo}
                onChange={handleChange}
                placeholder="Enter reference number"
                style={styles.input}
              />
            </div>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>Amount*:</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                style={styles.input}
              />
            </div>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>Payment Date*:</label>
              <input
                type="date"
                name="paymentDate"
                value={formData.paymentDate}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div className="col-6" style={styles.gridItem}>
              <label style={styles.label}>Bank Name:</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Enter bank name"
                style={styles.input}
              />
            </div>
          </div>
        </section>

        <div style={styles.actions}>
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            style={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    // maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#4CAF50",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  section: {
    marginBottom: "20px",
  },
  sectionHeader: {
    fontSize: "18px",
    color: "#6b4e9b",
    borderBottom: "2px solid #ccc",
    paddingBottom: "5px",
    marginBottom: "15px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  gridItem: {
    flex: "0 0 48%", // Approximately col-6
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "none",
  },
  select: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cancelButton: {
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default MemberDetailsForm;
