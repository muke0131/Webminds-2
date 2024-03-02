import React from 'react';

const User_details = () => {
  return (
    <div style={{
      background: '#d8dde8',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '20px',
      width:'15rem',
      height:'12rem',
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
      fontFamily: 'Arial, sans-serif'
    }}>
        <h2 style={{fontWeight:'bold',fontSize:'1.5rem',fontFamily:'times-new-roman'}}>Customer Details</h2>
      <h3 style={{
        fontSize: '1rem',
        fontWeight: 'bolder',
        marginBottom: '8px',
      }}>Name</h3>
      <h3 style={{
        fontSize: '1.2rem',
        marginBottom: '8px',
      }}>Prateek Gupta</h3>
      <h3 style={{
        fontSize: '1rem',
        fontWeight: 'bolder',
        marginBottom: '4px',
      }}>Account ID</h3>
      <h3 style={{
        fontSize: '1.2rem',
        marginBottom: '0',
      }}>1212131313131313</h3>
    </div>
  );
};

export default User_details;
