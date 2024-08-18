const express=require('express');
const path = require('path');
const connectDb=require('./config/db');
const cors = require('cors');
require('dotenv').config();
//routes require
const productRoutes=require('./routes/productRoutes');
const testimonialRoutes=require('./routes/testimonialRoutes');
const userRoutes=require('./routes/userRoutes');
const statisticsRoutes=require('./routes/statisticsRoutes');

const app=express();
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true //cookies
}));
app.use(express.json());
//connect with db
connectDb();
//upload middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//routes
app.use('/auth',userRoutes);
app.use('/statis',statisticsRoutes);
app.use('/product',productRoutes);
app.use('/testimonial',testimonialRoutes);

const _port=process.env.port;

app.listen(_port,()=>console.log('server started at port 3000'))


