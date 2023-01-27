import express from "express";
const app = express()

import  connectDB  from "./config/mongoose.config.js";
connectDB();

import cors from 'cors'
app.use(cors(), express.json())

import pirateRouter from "./routes/pirate.routes.js";
app.use('/api', pirateRouter)

const port = 8000;
app.listen(port, () =>console.log(`listening on port: ${port}`))