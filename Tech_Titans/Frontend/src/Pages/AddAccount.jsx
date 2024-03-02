
import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SideBar from '../components/SideBar';
import { useState } from 'react';

const AddAccount = () => {
  const [inputs, setInputs] = useState({
    bank: 'Central Bank Of India',
    accno: '',
    acc_holder: ''
  });

  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs); // Log the data entered by the user
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <form onSubmit={handleSubmit}>
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
              name="bank"
              value={inputs.bank}
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
              name="accno"
              value={inputs.accno}
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
              id="accountholder"
              name="acc_holder"
              value={inputs.acc_holder}
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

export default AddAccount;
