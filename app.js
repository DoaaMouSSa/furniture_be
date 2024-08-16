const express=require('express');
const path = require('path');
const connectDb=require('./config/db');
const cors = require('cors');
require('dotenv').config();
//routes require
const productRoutes=require('./routes/productRoutes');
const testimonialRoutes=require('./routes/testimonialRoutes');

const app=express();
app.use(cors());
app.use(express.json());
connectDb();
// Middleware to serve static files (e.g., uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/product',productRoutes);
app.use('/testimonial',testimonialRoutes);

const _port=process.env.port;

app.listen(_port,()=>console.log('server started at port 3000'))


