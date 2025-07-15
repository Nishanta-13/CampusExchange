const express= require('express');
require('dotenv').config();
const verifyUser= require('./middleware/auth.middleware');
const connectDB=require('./config/db');

const app=express();
connectDB();
