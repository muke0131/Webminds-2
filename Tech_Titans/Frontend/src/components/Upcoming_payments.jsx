
import React from 'react';

const UpcomingPayments = () => {
  const upcomingPayments = [
    { title: 'Electricity Bill', amount: '$100' },
    { title: 'Internet Bill', amount: '$50' },
    { title: 'Internet Bill', amount: '$50' },
    // { title: 'Internet Bill', amount: '$50' },
  ];

  return (
    <div style={{ backgroundColor: '#6e6eba', padding: '10px', height: 'auto', maxHeight: '210px', overflowY: 'auto',marginTop:'20px',borderRadius:'5px' }}>
      <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '10px' }}>Upcoming Payments</h1>
      <div style={{ display: 'grid', gap: '10px' }}>
        {upcomingPayments.map((payment, index) => (
          <div key={index} style={{ backgroundColor: 'transparent', padding: '10px', borderRadius: '5px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '5px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: 'white' }}>{payment.title}</div>
            <div style={{ fontStyle: 'italic', color: 'white' }}>{payment.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPayments;