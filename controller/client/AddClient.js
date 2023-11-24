const express = require('express');
const Router = express.Router();
Router.use(express.json());

const AddClient = require('../../model/client/Client');


Router.post('/AddClient', async (req, res) => {
    try {
        const data = req.body;
        const user = new AddClient(data);
        const savedUser = await user.save();
        console.log('تمت إضافة الحريف بنجاح');
        res.status(200).send(savedUser);
    } catch (err) {
        console.log('حدث خطأ أثناء إضافة الحريف', err);
        res.status(500).send('حدث خطأ أثناء إضافة الحريف');
    }
});

module.exports = Router;
