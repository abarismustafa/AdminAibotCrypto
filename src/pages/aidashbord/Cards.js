import React from 'react';

const IncomeDashboard = () => {
  const walletData = [
    { amount: "3426.81", label: "Total Income", icon: "₹", bgClass: "blue" },
    { amount: "0.00", label: "Cash Point Wallet", icon: "₹", bgClass: "purple" },
    { amount: "3.98", label: "Main Wallet", icon: "₹", bgClass: "lightPurple" },
    { amount: "14724.00", label: "Topup Wallet", icon: "₹", bgClass: "red" },
    { amount: "0.00", label: "Card Wallet", icon: "₹", bgClass: "orange" },
    { amount: "18.73", label: "Self Cash Back Wallet", icon: "₹", bgClass: "pink" },
    { amount: "945.00", label: "Matching Income", icon: "👥", bgClass: "blue" },
    { amount: "2481.81", label: "Sponsor Matching Income", icon: "👥", bgClass: "lightBlue" },
    { amount: "0", label: "Single Line Income", icon: "👥", bgClass: "purple" },
    { amount: "0", label: "Repurchase Income", icon: "👥", bgClass: "red" },
    { amount: "0", label: "Loyalty Income", icon: "👥", bgClass: "orange" },
    { amount: "0", label: "Star Loyalty Income", icon: "👥", bgClass: "pink" },
    { amount: "0", label: "Reward and Award Income", icon: "👥", bgClass: "pink" },
    { amount: "0", label: "Royalty Income", icon: "👥", bgClass: "pink" },
    { amount: "0", label: "Level Income ", icon: "👥", bgClass: "pink" },
    { amount: "32321", label: "Org2 Total Bussiness", icon: "👥", bgClass: "pink" },
    { amount: "1033", label: "Org1 Total Bussiness", icon: "👥", bgClass: "pink" },
    { amount: "0", label: "Self Affilate Income ", icon: "👥", bgClass: "pink" },
    { amount: "1", label: "Org1 No Of User", icon: "👥", bgClass: "pink" },
    { amount: "4", label: "Org2 No Of User", icon: "👥", bgClass: "pink" },
  ];

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      padding: '20px',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      height: '120px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    gradients: {
      blue: { background: 'linear-gradient(135deg, #2193b0, #6dd5ed)' },
      lightBlue: { background: 'linear-gradient(135deg, #3b8d99, #6dd5ed)' },
      purple: { background: 'linear-gradient(135deg, #7b4397, #dc2430)' },
      lightPurple: { background: 'linear-gradient(135deg, #8e44ad, #c39bd3)' },
      red: { background: 'linear-gradient(135deg, #e52d27, #ff6e7f)' },
      orange: { background: 'linear-gradient(135deg, #ff7e5f, #feb47b)' },
      pink: { background: 'linear-gradient(135deg, #ff6a00, #ee0979)' },
    },
    amount: { fontSize: '1.5em', fontWeight: 'bold' },
    icon: { fontSize: '1.2em', margin: '5px 0' },
    label: { fontSize: '0.9em' },
  };

  return (
    <div style={styles.container}>
      {walletData.map((wallet, index) => (
        <div
          key={index}
          style={{ ...styles.card, ...styles.gradients[wallet.bgClass] }}
        >
          <div style={styles.amount}>{wallet.amount}</div>
          <div style={styles.icon}>{wallet.icon}</div>
          <div style={styles.label}>{wallet.label}</div>
        </div>
      ))}
    </div>
  );
};

export default IncomeDashboard;
