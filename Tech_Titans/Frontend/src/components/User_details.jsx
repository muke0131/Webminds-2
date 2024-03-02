

import React from 'react';

const User_details = () => {
  return (
    <div style={{
      background: '#ADD8E6',
      padding: '15px',
      borderRadius: '10px',
      marginTop: '20px',
      width:'20rem'
    }}>
        <h2 style={{fontFamily:'times-new-roman',fontWeight:'bolder',fontSize:'2rem'}}>Customer Details</h2>
      <h3 style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '2px',
      }}>Name</h3>
      <h3 style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5rem',
        marginBottom: '0px',
      }}>Prateek Gupta</h3>
      <h3 style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '0',

      }}>Account ID</h3>
      <h3 style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5rem',
        marginBottom: '0',
      }}>1212131313131313</h3>
    </div>
  );
};

export default User_details;
