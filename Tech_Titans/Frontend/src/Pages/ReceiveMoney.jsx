
import React, { useState, useEffect } from 'react';
import QRCode from "react-qr-code";
import SideBar from '../components/SideBar';
import { Divider} from '@mui/material';
const ReceiveMoney = () => {
  const [qrCodeData, setQRCodeData] = useState('');
  const [shareableLink, setShareableLink] = useState('');
  const [upiID, setUpiID] = useState('');
  useEffect(() => {
    const data = 'Your payment information or any other data';
    setQRCodeData(data);
    generateShareableLink(data);
    setUpiID('kumarPankaj@okhdfcbank');
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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SideBar />
      <div style={{ color: 'white', textAlign: 'center' }}>
        {qrCodeData && (
          <div>
            <QRCode value={qrCodeData} style={{width:'180px'}} />
            <p style={{fontSize:'1.3rem'}}>Scan this QR code to receive money</p>
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
        <Divider style={{backgroundColor: 'white',margin:'2rem',width:'50rem'}}/>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Receive Money through UPI ID</h2>
        <label elevation={3} style={{ backgroundColor: 'transparent',border: '1px solid white', color: 'white', display: 'inline-flex', alignItems: 'center', padding: '0.5rem',borderRadius:'2px' }}>
          <p style={{ fontSize: '1.2rem', margin: '0' }}>{upiID}</p>
        </label>
      </div>
    </div>
  );
};

export default ReceiveMoney;


