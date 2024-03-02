import React, { useState } from 'react';
import SideBar from '../components/SideBar';

const SendMoney = () => {
  const [inputs, setInputs] = useState({
    account: '',
    receiver: '',
    amount: '',
    currency: 'USD' 
  });
  const accountNumbers = [
    { name: "Central Bank Of India", number: "1234567890" },
    { name: "Bank of Broda", number: "0987654321" },
    { name: "HDFC Bank", number: "4567890123" },
    { name: "ICICI Bank", number: "7890123456" },
    { name: "Punjab National Bank", number: "3456789012" },
    { name: "Axis Bank", number: "9012345678" }
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs({
      account: '',
      receiver: '',
      amount: '',
      currency: 'USD' 
    });
  };

  const handleCancel = () => {
    setInputs({
      account: '',
      receiver: '',
      amount: '',
      currency: 'USD' 
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft:'9rem' }}>
      <SideBar />
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
              name="account"
              value={inputs.account}
              onChange={handleChange}
              style={{
                padding: '8px',
                width: '500px',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              <option value="">Select an account</option>
              {accountNumbers.map((account, index) => (
                <option key={index} value={account.number}>
                  {account.number}
                </option>
              ))}
            </select>
          </div>
          <div className="account-no">
            <h3 style={{textAlign:'left' }}>Receiver Account Number</h3>
            <input
              type="text"
              id="accountNo"
              name="receiver"
              value={inputs.receiver}
              onChange={handleChange}
              style={{
                padding: '8px',
                width: '480px',
                border: 'none',
                borderRadius: '5px',
                alignContent:'left'
              }}
            />
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '20px' }}>
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
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                  <option value="EURO">EURO</option>
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