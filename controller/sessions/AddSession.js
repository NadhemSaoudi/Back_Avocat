const express = require('express');
const Router = express.Router();
Router.use(express.json());
const jalsa = require('./../../model/sessions/AddSession');
Router.post('/AddSession', async (req, res) => {
    try {
        const data = req.body;
        const session = new jalsa(data);
        const SaveSession = await session.save();
        console.log('تمت إضافة الجلسة بنجاح');
        res.status(200).send(SaveSession);
    } catch (err) {
        console.log('حدث خطأ أثناء إضافة الجلسة', err);
        res.status(500).send('حدث خطأ أثناء إضافة الجلسة');
    }
});
module.exports = Router;