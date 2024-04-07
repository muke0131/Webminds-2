
import React, { useState, useEffect } from 'react';
import QRCode from "react-qr-code";
import SideBar from '../components/SideBar';
import { Divider, Typography} from '@mui/material';
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify'
const ReceiveMoney = () => {
  const [loading,setLoading]=useState(true);
  const [qrCodeData, setQRCodeData] = useState('');
  const [shareableLink, setShareableLink] = useState('');
  const [upiID, setUpiID] = useState('');
  const [username, setUsername] = useState('');
  const {authToken}=useAuth();
  const getDetails=async ()=>{
    try{
      const response=await fetch("http://localhost:4000/api/auth/user",{
        method:"GET",
        headers: {
          Authorization: authToken,
        }
      })
      if(response.ok){
        const data=await response.json()
        console.log(data)
        const newRes=await fetch(`http://localhost:4000/api/account/bank/${data.user.banks[0]._id}`,{
          method:"GET",
          headers: {
            Authorization: authToken,
          }
        })
        if(newRes.ok){
          const bankData=await newRes.json();
          setUsername(bankData.account.username);
          const cleanedUsername = bankData.account.username.split(' ').join('_');
          setUpiID(`${cleanedUsername}@easyPay`);
          const data = `Account Details : \n Account Holder : ${bankData.account.username} \n Bank : ${bankData.account.bank_name} \n Account_No : ${bankData.account.account_no}`;
          setQRCodeData(data);
          generateShareableLink(data);
        }
      }
      else{
        setUsername(data.user.username);
        setAccount("***************");
        setBank_name("Central Bank of India");
      }
      setLoading(false);
    }
    catch(err){
      toast.error(err);
    }
  }


  useEffect(() => {
    getDetails();
    
  }, []);

  const generateShareableLink = (data) => {
    const link = `https://example.com/qrcode?data=${encodeURIComponent(data)}`;
    setShareableLink(link);
  };

  const downloadQRCode = () => {
    const qrCodeDataURL = `data:image/jpg;base64,${qrCodeData}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeDataURL;
    downloadLink.download = 'qrcode.jpg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const shareQRCode = () => {
    navigator.clipboard.writeText(shareableLink); 
    alert('QR code link copied to clipboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center',marginBottom:'2rem' }}>
      <SideBar />
      <div style={{ color: 'white', textAlign: 'center' }}>
      <Typography variant="h4" style={{ color: 'black', marginBottom: '20px',fontFamily:'times-new-roman' , marginTop:'1.2rem'}}>Recieve Money</Typography>
        {loading ? (<p>Loading....</p>):(
          <>
          {qrCodeData && (
          <div>
            <QRCode value={qrCodeData} style={{width:'180px'}} />
            <p style={{fontSize:'1.3rem',color:'black'}}>Scan this QR code to receive money</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button
                onClick={downloadQRCode}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#fff',
                  color: 'black',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '20px',
                }}
              >
                Download QR Code
              </button>
              <button
                onClick={shareQRCode}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#fff',
                  color: 'black',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Share QR Code
              </button>
            </div>
          </div>
        )}
        <Divider style={{backgroundColor: 'black',margin:'2rem',width:'50rem'}}/>
        <Typography variant='h5' fontFamily={'times-new-roman'} sx={{color:'black',marginBottom:'1rem'}}>Receive Money through UPI ID</Typography>
        <label elevation={3} style={{ backgroundColor: 'transparent',border: '1px solid black', color: 'black', display: 'inline-flex', alignItems: 'center', padding: '0.5rem',borderRadius:'2px' }}>
          <p style={{ fontSize: '1.2rem' }}>{upiID}</p>
        </label>
          </>
        )
        }
        
      </div>
    </div>
  );
};

export default ReceiveMoney;


