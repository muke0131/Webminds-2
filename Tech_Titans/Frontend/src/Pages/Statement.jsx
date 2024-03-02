import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import SideBar from '../components/SideBar';

const transactions = [
    { type: 'Payment', dateTime: '2024-03-01 10:30 AM', amount: '$50.00', status: 'Completed' },
    { type: 'Transfer', dateTime: '2024-02-28 03:15 PM', amount: '$100.00', status: 'Pending' },
    { type: 'Payment', dateTime: '2024-02-27 09:45 AM', amount: '$75.00', status: 'Completed' },
    { type: 'Transfer', dateTime: '2024-02-26 02:30 PM', amount: '$150.00', status: 'Canceled' },
    { type: 'Payment', dateTime: '2024-02-25 11:20 AM', amount: '$200.00', status: 'Pending' }
  ];
  

const Statement = () => {
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
    <div style={{display:'flex'}}>
      <SideBar/>
      <div style={{ width: '100%' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Statement and Balance</h2>
      <Table style={{ width: '100%' }}>
        <TableHead>
          <TableRow style={{ background: 'black' }}>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Type</TableCell>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Date & Time</TableCell>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Amount</TableCell>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index} >
              <TableCell sx={{ color: 'white',borderBottom:'none',fontFamily:'serif',fontSize:'1.3rem' }}>{transaction.type}</TableCell>
              <TableCell sx={{ color: 'white',borderBottom:'none',fontFamily:'serif',fontSize:'1.3rem' }}>{transaction.dateTime}</TableCell>
              <TableCell sx={{ color: 'white',borderBottom:'none',fontFamily:'serif',fontSize:'1.3rem' }}>{transaction.amount}</TableCell>
              <TableCell sx={{ color: getStatusColor(transaction.status),borderBottom:'none',fontFamily:'serif',fontSize:'1.3rem' }}>{transaction.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </div>
  );
};

export default Statement;
