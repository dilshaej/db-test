require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

const dbServer = express()

dbServer.use(cors())
dbServer.use(express.json())
dbServer.use(router)



const PORT = 3000 || process.env.PORT


dbServer.listen(PORT,()=>{
    console.log(`My sever started at PORT : ${PORT}`);
})

dbServer.get("/",(req,res)=>{
res.status(200).send(`<h1>Server started and waiting for client request!!!</h1>`)
})


