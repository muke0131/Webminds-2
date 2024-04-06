import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../store/auth"
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const {storeToken}=useAuth();

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    try{
      const response=await fetch("http://localhost:4000/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(inputs)
      })
      if(response.ok){
        const data=await response.json();
        storeToken(data.token);
        setInputs({email:"",password:""});
        navigate("/Dashboard");
        toast.success('Login Successful!')
      }
      else{
        toast.error("Invalid Credentials !");
      }
    }
    catch(err){
      toast.error(err);
    }
  };

  return (
    <div style={{ backgroundColor: '#320b7a', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <Box maxWidth={400} width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={3} borderRadius={5} boxShadow={3} bgcolor="white">
          <Typography variant='h4' textAlign="center" fontFamily="Times New Roman" color="black"  mb={3}>Login</Typography>
          <TextField label='Email' value={inputs.email} onChange={handleChange} name='email' margin='normal' type='email' required />
          <TextField label='Password' value={inputs.password} onChange={handleChange} name='password' margin='normal' type='password' required />
          <Button variant='contained' type='submit' color='success' sx={{ my: 2, width: '40%' }}>Submit</Button>
          <Button sx={{color:'black'}} onClick={() => navigate("/signup")} fullWidth>Create an Account</Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;

