import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Security = () => {
  const [inputs, setInputs] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false); 
  const [showNewPassword, setShowNewPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ margin: 'auto' }}> 
        <form onSubmit={handleSubmit}>
          <div
            style={{
              backgroundColor: 'inherit',
              color: '#fff',
              padding: '50px',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <h3 style={{ marginTop: '2rem', color: 'white', textAlign: 'left', fontSize: '1.4rem' }}>Change Password</h3>
            <div className='current-password'>
              <h3 style={{ textAlign: 'left' }}>Current Password</h3>
              <div style={{ position: 'relative' }}>
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  id='current_password'
                  name='current_password'
                  value={inputs.current_password}
                  onChange={handleChange}
                  style={{
                    padding: '8px',
                    width: '400px',
                    border: 'none',
                    borderRadius: '5px',
                    alignContent: 'left',
                  }}
                />
                <button
                  type='button'
                  onClick={()=>setShowCurrentPassword(!showCurrentPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {showCurrentPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              </div>
            </div>
            <div className='new-password'>
              <h3 style={{ textAlign: 'left' }}>New Password</h3>
              <div style={{ position: 'relative' }}>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id='new_password'
                  name='new_password'
                  value={inputs.new_password}
                  onChange={handleChange}
                  style={{
                    padding: '8px',
                    width: '400px',
                    border: 'none',
                    borderRadius: '5px',
                    alignContent: 'left',
                  }}
                />
                <button
                  type='button'
                  onClick={()=>setShowNewPassword(!showNewPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              </div>
            </div>
            <div className='current-password'>
              <h3 style={{ textAlign: 'left' }}>Confirm Password</h3>
              <div style={{ position: 'relative' }}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirm_password'
                  name='confirm_password'
                  value={inputs.confirm_password}
                  onChange={handleChange}
                  style={{
                    padding: '8px',
                    width: '400px',
                    border: 'none',
                    borderRadius: '5px',
                    alignContent: 'left',
                  }}
                />
                <button
                  type='button'
                  onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              </div>
            </div>

          </div>
          <div style={{ textAlign: 'center' }}> 
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
              type='submit'
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Security;