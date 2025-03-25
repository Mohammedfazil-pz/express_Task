const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    pName:{type:String,required:true},
    pPrice:{type:Number,required:true},
    pDesc:{type:String}
})

const product=mongoose.model("products",productSchema)

module.exports=product