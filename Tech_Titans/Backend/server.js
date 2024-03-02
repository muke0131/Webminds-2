require('dotenv').config();
const express=require('express');
const connectToDb=require('./db');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const authRoute=require('./routes/auth-router')
const cors=require("cors");


const app=express();
const corsOptions={
    origin:"*",
    method:"GET , POST , PUT , DELETE , PATCH , HEAD",
    credentials:true
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

const PORT=process.env.PORT;

app.use('/api/auth',authRoute);

connectToDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Listening on : http://localhost:${PORT}`)
    })
})