import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { useAuth } from '../store/auth';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const SendMoney = () => {
  const navigate=useNavigate()
  const [inputs, setInputs] = useState({
    from_account: '',
    to_account: '',
    amount: 0,
    currency: 'INR' 
  });
  const {authToken}=useAuth();
  const [acNo,setAcNo]=useState([]);
  const getAccounts=async()=>{
    try{
      const response=await fetch("http://localhost:4000/api/account/getUserAccounts",{
        method:"GET",
        headers: {
          Authorization: authToken,
        }
      })
      if (response.ok) {
        const data = await response.json();
        let len=data.length
        for(let i=0;i<len;i++){
          acNo.push(data[i].account_no)
          setAcNo(acNo)
        }
      } else {
        setAcNo(["***************"]);
      }
      
    }
    catch(err){
      toast.error(err);
    }
  }

  useEffect(()=>{
    setAcNo([]);
    getAccounts();
  },[]);
  // console.log(acNo);
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
    // console.log(inputs);
    try{
      const response=await fetch("http://localhost:4000/api/payments/makePayment",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":authToken
      },
      body:JSON.stringify(inputs)
    })
    if(response.ok){
      // console.log(response.message);
      navigate('/Dashboard')
      toast.success("Payment Successfull !! ")
    }
    else{
      // console.log(response.message);
      toast.error("Some error Occured !!")
    }
    }
    catch(err){
      toast.error(err);
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft:'9rem' }}>
      <SideBar />
      <Typography variant="h4" style={{ color: '#ffffff', marginBottom: '20px',fontFamily:'times-new-roman',marginTop:'2rem' }}>Send Money</Typography>
      <form onSubmit={handleSubmit}>
        <div style={{
          backgroundColor: 'inherit',
          color: '#fff',
          padding: '50px',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div className="select-bank-account" style={{
            display: 'inline-block',
            marginTop: '20px',
          }}>
            <h3 style={{ textAlign: 'left' }}>Payment Method</h3>
            <select
              name="from_account"
              value={inputs.from_account}
              onChange={handleChange}
              style={{
                padding: '8px',
                width: '500px',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              {/* {console.log(acNo.length)} */}
              <option value="">Select an account</option>
              {acNo.map((account, index) => (
                <option key={index} value={account}>
                  {account}
                </option>
              ))}
            </select>
          </div>
          <div className="account-no">
            <h3 style={{textAlign:'left' }}>Receiver Account Number</h3>
            <input
              type="text"
              id="accountNo"
              name="to_account"
              value={inputs.to_account}
              onChange={handleChange}
              style={{
                padding: '8px',
                width: '480px',
                border: 'none',
                borderRadius: '5px',
                alignContent:'left',
                color:'black'
              }}
            />
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="amount-container" style={{ marginRight: '20px' }}>
                <h3 style={{ textAlign: 'left' }}>Amount</h3>
                <input
                  type="text"
                  id="Amount"
                  name="amount"
                  value={inputs.amount}
                  onChange={handleChange}
                  style={{
                    padding: '8px',
                    width: '340px',
                    border: 'none',
                    borderRadius: '5px',
                  }}
                />
              </div>
              <div className="currency-select" style={{ marginRight: '20px' }}>
                <h3 style={{ textAlign: 'left' }}>Currency</h3>
                <select
                  name="currency"
                  value={inputs.currency}
                  onChange={handleChange}
                  style={{
                    padding: '8px',
                    width: '100px',
                    border: 'none',
                    borderRadius: '5px',
                  }}
                >
                  <option value="INR">INR</option>
                  {/* <option value="USD">USD</option>
                  <option value="EURO">EURO</option> */}
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
              <button
                onClick={handleCancel}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#fff',
                  color: 'black',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '5rem',
                  fontSize:'1.2rem',
                  fontFamily:'serif'
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
                  fontSize:'1.2rem',
                  fontFamily:'serif',
                }}
                type="submit"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SendMoney;