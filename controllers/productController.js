const products = require('../models/productModel')

exports.addProducts = async (req, res) => {
    const { pName, pPrice, pDesc } = req.body
    try {
        if (pName && pPrice) {
            const addProduct = new products({ pName: pName, pPrice: pPrice, pDesc: pDesc ? pDesc : '' })
            await addProduct.save()
            res.status(201).json({ message: "Product Added succesfully!", product: addProduct })
        }else{
            res.status(400).json({message:"Please enter ProductName or ProductPrice atleast!"})
        }

    } catch (error) {
        console.log(error)
    }
    
}



exports.getAllProducts=async(req,res)=>{

    try {
        const fetchAllProducts=await products.find({})
       if(fetchAllProducts.length>0){
        res.status(200).json({products:fetchAllProducts})
       }else{
        res.status(200).json({message:"Currently products are unavailable",products:[]})
       }
    } catch (error) {
        console.log(error)
    }



}
