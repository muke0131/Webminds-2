import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { useAuth } from '../store/auth';
import { Typography, MenuItem, TextField, Box,Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
const SendMoney = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    from_account: '',
    to_account: '',
    amount: '',
    currency: 'INR'
  });
  const { authToken } = useAuth();
  const [acNo, setAcNo] = useState([]);
  const getAccounts = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/account/getUserAccounts", {
        method: "GET",
        headers: {
          Authorization: authToken,
        }
      })
      if (response.ok) {
        const data = await response.json();
        let len = data.length
        // console.log(len)
        for (let i = 0; i < len; i++) {
          // setAcNo([...acNo,data[i].account_no]);
          acNo.push(data[i].account_no)
          setAcNo(acNo)
        }

      } else {
        setAcNo(["***************"]);
      }

    }
    catch (err) {
      toast.error(err);
    }
  }

  useEffect(() => {
    setAcNo([]);
    getAccounts();
  }, []);
  console.log(acNo);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    delete inputs['currency'];
    console.log(inputs);
    try {
      const response = await fetch("http://localhost:4000/api/payments/makePayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authToken
        },
        body: JSON.stringify(inputs)
      })
      if (response.ok) {
        navigate('/Dashboard')
        toast.success('Payment Successfull!')
      }
      else {
        toast.error('Some error occured!')
      }
    }
    catch (err) {
      console.log(err);
    }
    setInputs({
      from_account: '',
      to_account: '',
      amount: '',
      currency: 'INR'
    });
  };

  const handleCancel = () => {
    setInputs({
      from_account: '',
      to_account: '',
      amount: '',
      currency: 'INR'
    });
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft:'10rem' }}>
      <SideBar />
      <Typography variant="h4" style={{ textAlign: 'center', color: 'black', marginBottom: '30px', fontFamily: 'times-new-roman', marginTop: '2rem' }}>Send Money</Typography>
      <form onSubmit={handleSubmit}>
      <Box
      bgcolor="inherit"
      color="#fff"
      textAlign="center"
      position="relative"
    >
          <TextField
            fullWidth
            select
            label="Select Account"
            name="from_account"
            value={inputs.from_account}
            onChange={handleChange}
            variant="outlined"
            style={{
              marginTop: '30px',
              textAlign: 'left',
              color: 'black'
            }}
          >
            {acNo.map((account, index) => (
              <MenuItem key={index} value={account}>
                {account}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            id="accountNo"
            name="to_account"
            label="Receiver Account Number"
            value={inputs.to_account}
            onChange={handleChange}
            variant="outlined"
            style={{
              marginTop: '25px',
              textAlign: 'left',
              color: 'black'
            }}
          />
             <Box display="flex" alignItems="center">
          <Box className="amount-container" margin="auto" marginTop={'1.4rem'}>
            <TextField
              type="text"
              id="Amount"
              name="amount"
              label='Amount'
              value={inputs.amount}
              onChange={handleChange}
              style={{
                width: '380px',
                marginRight:'20px'
              }}
              variant="outlined"
            />
          </Box>
          <Box className="currency-select" margin="auto">
            <Select
              name="currency"
              value={inputs.currency}
              onChange={handleChange}
              style={{
                marginTop:'20px',
                height:'55px',
                padding: '8px',
                borderRadius: '5px',
              }}
              variant="outlined"
            >
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Box>
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
  )
}

export default SendMoney;







