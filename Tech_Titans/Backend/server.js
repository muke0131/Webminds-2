require('dotenv').config();
const express=require('express');
const connectToDb=require('./db');
const authRoute=require('./routes/auth-router')


const app=express();

app.use(express.json());

const PORT=process.env.PORT;

app.use('/api/auth',authRoute);

connectToDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Listening on : http://localhost:${PORT}`)
    })
})