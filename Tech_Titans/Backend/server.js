const express=require('express');

const app=express();

app.use(express.json());

const PORT=4000;

app.use('api/auth',authRoute);

const server=app.listen(PORT,()=>{
    console.log(`Server Listening on : http://localhost:${PORT}`)
})