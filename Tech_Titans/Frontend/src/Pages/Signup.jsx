
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../store/auth";

const Signup = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username:'',
    email: '',
    phone:'',
    password: ''
  });
  const {storeToken}=useAuth();

  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try{
      const response=await fetch("https://webminds-2.onrender.com/api/auth/register",{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(inputs),
      })
      if(response.ok){
        const data=await response.json();
        storeToken(data.token);
        setInputs({
          username:"",
          email:"",
          phone:"",
          password:"",
        })
        navigate('/')
      }
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div style={{ backgroundColor: 'inherit', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <Box maxWidth={450} width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={3} borderRadius={5} boxShadow={3} bgcolor="white">
          <Typography variant='h4' textAlign="center" fontFamily="Times New Roman" color="black"  mb={3}>Register</Typography>
          <TextField label='Name' value={inputs.username} onChange={handleChange} name='username' margin='normal' type='text' required />
          <TextField label='Email' value={inputs.email} onChange={handleChange} name='email' margin='normal' type='email' required />
          <TextField label='Phone Number' value={inputs.phone} onChange={handleChange} name='phone' margin='normal' type='text' required />
          <TextField label='Password' value={inputs.password} onChange={handleChange} name='password' margin='normal' type='password' required />
          <Button variant='contained' type='submit' color='success' sx={{ my: 2, width: '30%' }}>Submit</Button>
          <Button sx={{color:'black'}} onClick={() => navigate("/")} fullWidth>Already registered? Please Login</Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;


