import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const transactions = [
    { personName: 'John Doe', type: 'Payment', dateTime: '2024-03-01 10:30 AM', amount: '$50.00', status: 'Completed' },
    { personName: 'Jane Smith', type: 'Transfer', dateTime: '2024-02-28 03:15 PM', amount: '$100.00', status: 'Pending' },
    { personName: 'Alice Johnson', type: 'Payment', dateTime: '2024-02-27 09:45 AM', amount: '$75.00', status: 'Completed' },
    { personName: 'Bob Brown', type: 'Transfer', dateTime: '2024-02-26 02:30 PM', amount: '$150.00', status: 'Canceled' },
    { personName: 'Emma Lee', type: 'Payment', dateTime: '2024-02-25 11:20 AM', amount: '$200.00', status: 'Pending' }
  ];
  

const Transaction_table = () => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return ' #00FF00'; 
      case 'pending':
        return '#ffeb3b'; 
      case 'canceled':
        return '#f44336'; 
      default:
        return '#fff'; 
    }
  };

  return (
    <div >
      <h2 style={{ color: 'white', textAlign: 'center' }}>Transaction History</h2>
      <Table>
        <TableHead>
          <TableRow style={{ background: 'black' }}>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Name</TableCell>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Type</TableCell>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Date & Time</TableCell>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Amount</TableCell>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell sx={{ color: 'white',borderBottom:'none',fontFamily:'serif',fontSize:'1.2rem' }}>{transaction.personName}</TableCell>
              <TableCell sx={{ color: 'white',borderBottom:'none',fontFamily:'serif',fontSize:'1.2rem' }}>{transaction.type}</TableCell>
              <TableCell sx={{ color: 'white',borderBottom:'none',fontFamily:'serif',fontSize:'1.2rem' }}>{transaction.dateTime}</TableCell>
              <TableCell sx={{ color: 'white',borderBottom:'none',fontFamily:'serif',fontSize:'1.2rem' }}>{transaction.amount}</TableCell>
              <TableCell sx={{ color: getStatusColor(transaction.status),borderBottom:'none',fontSize:'1.2rem',fontFamily:'serif' }}>{transaction.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Transaction_table;