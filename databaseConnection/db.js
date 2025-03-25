const mongoose=require('mongoose')

const connectionID=process.env.connectionID

mongoose.connect(connectionID).then((responce)=>{
    console.log("Database connected successfully!!")
}).catch((error)=>{
    console.log("Failed to connect Database",error)
})