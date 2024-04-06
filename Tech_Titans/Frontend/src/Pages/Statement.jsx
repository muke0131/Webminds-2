import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import SideBar from '../components/SideBar';
import { useAuth } from '../store/auth';

  

const Statement = () => {
  const {authToken}=useAuth();
  const [transactions,setTransactions]=useState([]);
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'received':
        return ' #00FF00'; 
      case 'sent':
        return '#f44336';  
      default:
        return '#fff'; 
    }
  };

  const getTransactions=async()=>{
    try{
      const response=await fetch("http://localhost:4000/api/payments/transactions",{
        method:"GET",
        headers:{
          "Authorization":authToken
        }
      })
      const data=await response.json()
      console.log(data)
      setTransactions(data);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getTransactions();
  },[])
  return (
    <div style={{display:'flex'}}>
      <SideBar/>
      <div style={{ width: '100%' }}>
      <Typography variant="h4" style={{ textAlign:'center',color: 'black', marginBottom: '30px',fontFamily:'times-new-roman',marginTop:'1.2rem' }}>Statement and Balance</Typography>
      <Table style={{ width: '100%' }}>
        <TableHead>
          <TableRow style={{ background: 'black' }}>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Type</TableCell>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Date & Time</TableCell>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>Amount</TableCell>
            <TableCell style={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Times new roman', fontSize: '20px',borderBottom:'none' }}>To / From</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {transactions.map((transaction, index) => {
    var createdAt = transaction.createdAt; // Assuming transaction.createdAt is a valid date string
    var date = new Date(createdAt);
    var formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
    });

    return (
        <TableRow key={index}>
            <TableCell sx={{ color: getStatusColor(transaction.status), borderBottom: 'none', fontFamily: 'serif', fontSize: '1.3rem' }}>{transaction.status}</TableCell>
            <TableCell sx={{ color: 'white', borderBottom: 'none', fontFamily: 'serif', fontSize: '1.3rem' }}>{formattedDate}</TableCell>
            <TableCell sx={{ color: 'white', borderBottom: 'none', fontFamily: 'serif', fontSize: '1.3rem' }}>{transaction.amount}</TableCell>
            <TableCell sx={{ color:'white', borderBottom: 'none', fontFamily: 'serif', fontSize: '1.3rem' }}>{transaction.status=="sent"?transaction.to_name:transaction.from_name}</TableCell>
        </TableRow>
    );
})}
        </TableBody>
      </Table>
    </div>
    </div>
  );
};

export default Statement;