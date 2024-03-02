import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import User_details from '../components/User_details';
import UpcomingPayments from '../components/Upcoming_payments';
import Transaction_table from '../components/Transaction_table';

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit', 
};

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginLeft: '3rem' }}>
        <div style={{ display: 'flex' }}>
          <Link to="/send-money" style={linkStyles}>
            <div style={{ background: 'gray', width: '170px', height: '170px', borderRadius: '15%', margin: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <PaymentIcon sx={{ fontSize: '6rem', color: 'white' }} />
              <h3>Send Money</h3>
            </div>
          </Link>
          <Link to="/receive-money" style={linkStyles}>
            <div style={{ background: 'gray', width: '170px', height: '170px', borderRadius: '15%', margin: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <SyncAltIcon sx={{ fontSize: '6rem', color: 'white' }} />
              <h3>Receive Money</h3>
            </div>
          </Link>
          <Link to="/add-account" style={linkStyles}>
            <div style={{ background: 'gray', width: '170px', height: '170px', borderRadius: '15%', margin: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <AccountBalanceIcon sx={{ fontSize: '6rem', color: 'white' }} />
              <h3>Add Bank Account</h3>
            </div>
          </Link>
          <Link to="/statement" style={linkStyles}>
            <div style={{ background: 'gray', width: '170px', height: '170px', borderRadius: '15%', margin: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <ListAltIcon sx={{ fontSize: '6rem', color: 'white', paddingTop: '1rem' }} />
              <h3>Balance And Statement</h3>
            </div>
          </Link>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <User_details/>
        <UpcomingPayments/>
        </div>
        <div>
          <Transaction_table/>
        </div>
      </div>
    </div>
  );
};

export default Home;
