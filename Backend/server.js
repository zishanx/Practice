import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`MongoDb Connected`);
        app.listen(process.env.PORT,()=>{console.log(`Server is runnng on port ${process.env.PORT}`)})
    })
    .catch(err => console.log(err))
