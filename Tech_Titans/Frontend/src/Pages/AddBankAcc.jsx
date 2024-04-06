import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SideBar from '../components/SideBar';
import { useState } from 'react';
import { Typography } from '@mui/material';
import {toast} from 'react-toastify';
const AddBankAcc = () => {
  const [inputs, setInputs] = useState({
    bank_name: 'Central Bank Of India',
    account_no: '',
    username: '',
    balance:''
  });

  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response=await fetch("http://localhost:4000/api/account/admin/createAccount",{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(inputs)
      })
      if(response.ok){
        toast.success("Bank Added Successfully!")
      }
      else
      {
        toast.error("Some error occured!")
      }
      setInputs({
        bank_name: 'Central Bank Of India',
        account_no: '',
        username: '',
        balance:''
      })
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <form onSubmit={handleSubmit}>
      <Typography variant="h4" style={{ color: 'black', marginBottom: '20px',fontFamily:'times-new-roman' }}>Bank</Typography>
        <div style={{
          backgroundColor: 'inherit',
          color: '#fff',
          padding: '50px',
          textAlign: 'center',
          position: 'relative',
          marginLeft: '10rem'
        }}>
          <AccountBalanceIcon style={{
            position: 'absolute',
            top: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '200px',
          }} />
          <div className="select-bank" style={{
            display: 'inline-block',
            marginTop: '200px',
          }}>
            <h3>Select Bank</h3>
            <select
              name="bank_name"
              value={inputs.bank_name}
              onChange={handleChange}
              style={{
                padding: '8px',
                width: '500px',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              <option value="Central Bank Of India">Central Bank Of India</option>
              <option value="Bank of Broda">Bank of Broda</option>
              <option value="HDFC">HDFC Bank</option>
              <option value="ICICI">ICICI Bank</option>
              <option value="Punjab National Bank">Punjab National Bank</option>
              <option value="Axis Bank">Axis Bank</option>
            </select>
          </div>
          <div className="account-no" style={{
            display: 'block',
            marginTop: '40px',
          }}>
            <h3>Enter Account Number</h3>
            <input
              type="text"
              id="accountNo"
              name="account_no"
              value={inputs.account_no}
              onChange={handleChange}
              style={{
                padding: '8px',
                width: '490px',
                border: 'none',
                borderRadius: '5px',
              }}
            />
          </div>
          <div className="account-holder" style={{
            display: 'block',
            marginTop: '40px',
          }}>
            <h3>Enter Account Holder</h3>
            <input
              type="text"
              id="username"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              style={{
                padding: '8px',
                width: '490px',
                border: 'none',
                borderRadius: '5px',
              }}
            />
            <h3>Enter Balance</h3>
            <input
              type="text"
              id="balance"
              name="balance"
              value={inputs.balance}
              onChange={handleChange}
              style={{
                padding: '8px',
                width: '490px',
                border: 'none',
                borderRadius: '5px',
              }}
            />
          </div>
          <button
            style={{
              backgroundColor: '#8a2be2',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '40px',
            }}
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBankAcc;