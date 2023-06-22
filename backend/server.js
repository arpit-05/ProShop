// const express=require('express')
// const products=require('./data/products')
// const dotenv=require('dotenv')
//const cors=require('cors')
import express from 'express'
import dotenv from 'dotenv'
//import products from './data/products.js';
import cors from 'cors';
import colors from 'colors'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'; 
import userRoutes from './routes/userRoutes.js'; 
import { NotFound,errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();
connectDB()

const app=express()
app.get('/',(req,res)=>{
    console.log(products)
    res.send("API is running... ")
})

app.use(express.json())
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use(cors())
app.use(NotFound)
app.use(errorHandler)
const PORT=process.env.PORT || 5001
app.listen(5001,console.log(`Server is listening in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))