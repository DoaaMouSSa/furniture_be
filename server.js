require('dotenv').config();

const express = require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const servicesRoutes=require('./routes/servicesRoutes');

const app=express();

mongoose.connect(process.env.DATABASE);
app.use(cors());
app.use(bodyParser.json());
mongoose.connection.on("connected",(err,res)=>{
    console.log("mongoose is connected");
});
mongoose.connection.on("error",(err)=>{
    console.log("Error:",err);
});
const _PORT=process.env.PORT;

// app.use(express.json());

app.get('/',(req,res,next)=>{
    res.send("welcome home")
})
app.use('/services',servicesRoutes);
app.listen(_PORT,()=>{
    console.log('Server started at port 3000')
})


