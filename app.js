const express=require('express');
const connectDb=require('./config/db');
const cors = require('cors');
require('dotenv').config();
//routes require
const productRoutes=require('./routes/productRoutes');

const app=express();
app.use(cors());
app.use(express.json());
connectDb();
app.use('/product',productRoutes);

const _port=process.env.port;

app.listen(_port,()=>console.log('server started at port 3000'))


