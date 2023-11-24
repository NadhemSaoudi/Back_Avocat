const express = require('express');
const Router = express.Router();
Router.use(express.json());
const delClent = require('../../model/client/Client');
Router.delete('/deleteClient/:id', async (req, res) => {


    const id = req.params.id;
    try {
        const user = await delClent.findByIdAndDelete(id);
        console.log('تم حذف الحريف بنجاح');
        res.status(200).send(user);
    } catch (err) {
        console.log('حدث خطأ أثناء حذف الحريف', err);
        res.status(500).send('حدث خطأ أثناء حذف الحريف');
    }
    


});

module.exports = Router;
