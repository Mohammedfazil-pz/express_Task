require('dotenv').config()

const express=require('express')
const cors=require('cors')
const productRouter=require('./routes/productsRoute')

require('./databaseConnection/db')

const server=express()

server.use(cors())
server.use(express.json())


const PORT=3000||process.env.PORT

server.use(productRouter)

server.listen(PORT,()=>{
    console.log("Server started!")
})