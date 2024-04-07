import React, { useState } from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SideBar from '../components/SideBar';
import { Typography, TextField, Button, MenuItem, Box } from '@mui/material';
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify';

const AddAccount = () => {
  const [inputs, setInputs] = useState({
    username: '',
    account_no: '',
    bank_name: ''
  });

  const { authToken } = useAuth();

  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/account/addBank", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authToken
        },
        body: JSON.stringify(inputs)
      });
      if (response.ok) {
        alert("Bank Added Successfully");
        setInputs({
          username: '',
          account_no: '',
          bank_name: 'Central Bank Of India'
        })
      } else {
        toast.error("Some error Occured");
      }
    }
    catch (err) {
      toast.error(err);
    }
  };
  const handleCancel = () => {
    setInputs({
      username: '',
    account_no: '',
    bank_name: ''
    });
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <form onSubmit={handleSubmit} style={{ marginTop: "1.2rem" }}>
        <Typography variant="h4" style={{ color: 'black', marginBottom: '10px', fontFamily: 'times-new-roman', textAlign: 'center', position: 'relative', marginLeft: "9rem" }}>Add Bank Account</Typography>
        <Box
          sx={{
            backgroundColor: 'inherit',
            color: 'black',
            padding: '50px',
            textAlign: 'center',
            position: 'relative',
            marginLeft: '10rem',
            width:'500px'
          }}
        >
          <AccountBalanceIcon
            sx={{
              position: 'absolute',
              top: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '180px',
            }}
          />
          <Box
            className="select-bank"
            sx={{
              display: 'inline-block',
              marginTop: '200px',
            }}
          >
            <TextField
              select
              fullWidth
              name="bank_name"
              label='Select bank'
              value={inputs.bank_name}
              onChange={handleChange}
              variant="outlined"
              sx={{
                textAlign:'left',
                width:'500px'
              }}
            >
              <MenuItem value="Central Bank Of India">Central Bank Of India</MenuItem>
              <MenuItem value="Bank of Broda">Bank of Baroda</MenuItem>
              <MenuItem value="HDFC">HDFC Bank</MenuItem>
              <MenuItem value="ICICI">ICICI Bank</MenuItem>
              <MenuItem value="Punjab National Bank">Punjab National Bank</MenuItem>
              <MenuItem value="Axis Bank">Axis Bank</MenuItem>
            </TextField>
          </Box>
          <Box
            className="account-no"
            sx={{
              display: 'block',
              marginTop: '40px',
            }}
          >
            <TextField
              fullWidth
              type="text"
              id="accountNo"
              label='Account Number'
              name="account_no"
              value={inputs.account_no}
              onChange={handleChange}
              variant="outlined"
              sx={{
                textAlign:'left'
              }}
            />
          </Box>
          <Box
            className="account-holder"
            sx={{
              display: 'block',
              marginTop: '40px',
            }}
          >
            <TextField
            fullWidth
              type="text"
              id="username"
              name="username"
              label='Account Holder'
              value={inputs.username}
              onChange={handleChange}
              variant="outlined"
              sx={{
                textAlign:'left'
              }}
            />
          </Box>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
              <button
                onClick={handleCancel}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#E97451',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '5rem',
                  fontSize: '1.2rem',
                  fontFamily: 'serif'
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#3A833A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  fontFamily: 'serif',
                }}
                type="submit"
              >
                Confirm
              </button>
            </div>
        </Box>
      </form>
    </Box>
  );
};

export default AddAccount;

