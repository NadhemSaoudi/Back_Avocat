const express = require('express');
const Router = express.Router();
Router.use(express.json());
const updateClient = require('../../model/client/Client');
Router.put('/updateClient/:id',async(req,res)=>{
    try {
    const id=req.params.id;
    const data=req.body;
    const user=await updateClient.findByIdAndUpdate(id,data)
    res.send(user)
    console.log('تم تعديل الحريف بنجاح');
    } catch (err) {
        console.error(err.message);
    }
    
    
})
module.exports=Router