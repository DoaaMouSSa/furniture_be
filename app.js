const express=require('express');
const path = require('path');
const connectDb=require('./config/db');
const cors = require('cors');
require('dotenv').config();
//routes require
const homeRoutes=require('./routes/HomeRoutes');
const userRoutes=require('./routes/userRoutes');
const productRoutes=require('./routes/productRoutes');
const testimonialRoutes=require('./routes/testimonialRoutes');
const messageRoutes=require('./routes/messagesRoutes');
const statisticsRoutes=require('./routes/statisticsRoutes');
const servicesRoutes=require('./routes/servicesRoutes');
const chooseSectionRoutes=require('./routes/chooseSectionRoutes');
const helpSectionRoutes=require('./routes/helpSectionRoutes');
const infoRoutes=require('./routes/infoRoutes');

const app=express();
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}));
app.use(express.json());
//connect with db
connectDb();
//upload middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//routes
app.use('/home',homeRoutes);
app.use('/auth',userRoutes);
app.use('/statis',statisticsRoutes);
app.use('/product',productRoutes);
app.use('/testimonial',testimonialRoutes);
app.use('/service',servicesRoutes);
app.use('/message',messageRoutes);
app.use('/chooseSection',chooseSectionRoutes);
app.use('/helpSection',helpSectionRoutes);
app.use('/info',infoRoutes);

const _port=process.env.port;

app.listen(_port,()=>console.log('server started at port 3000'))


