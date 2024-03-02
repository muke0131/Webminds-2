import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

const User_details = () => {

  const [userName,setUsername]=useState("---------");
  const [ac,setAc]=useState("***************");
  const { authToken } = useAuth();

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
        setUsername(data.user.username);
        const newRes=await fetch(`http://localhost:4000/api/account/bank/${data.user.banks[0]._id}`,{
          method:"GET",
          headers: {
            Authorization: authToken,
          }
        })
        if(newRes.ok){
          const bankData=await newRes.json();
          console.log(bankData);
          setAc(bankData.account.account_no);
        }
      }
      else{
        setUsername("---------")
        setAc("***************")
      }
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getDetails();
  },[getDetails])
  return (
    <div style={{
      background: '#d8dde8',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '20px',
      width:'15rem',
      height:'12rem',
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
      fontFamily: 'Arial, sans-serif'
    }}>
        <h2 style={{fontWeight:'bold',fontSize:'1.5rem',fontFamily:'times-new-roman'}}>Customer Details</h2>
      <h3 style={{
        fontSize: '1rem',
        fontWeight: 'bolder',
        marginBottom: '8px',
      }}>Name</h3>
      <h3 style={{
        fontSize: '1.2rem',
        marginBottom: '8px',
      }}>{userName}</h3>
      <h3 style={{
        fontSize: '1rem',
        fontWeight: 'bolder',
        marginBottom: '4px',
      }}>Account ID</h3>
      <h3 style={{
        fontSize: '1.2rem',
        marginBottom: '0',
      }}>{ac}</h3>
    </div>
  );
};

export default User_details;
