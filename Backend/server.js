import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import authRouter from './route/authRoutes.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api',authRouter)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`MongoDb Connected`);
        app.listen(process.env.PORT,()=>{console.log(`Server is running on port ${process.env.PORT}`)})
    })
    .catch(err => console.log(err))
