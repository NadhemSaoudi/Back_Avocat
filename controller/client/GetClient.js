const express = require('express');
const Router = express.Router();
Router.use(express.json());

const mongoose = require('mongoose');

Router.get('/getClients', async (req, res) => {
    try {
        const collection = mongoose.connection.db.collection('clients'); 
        const clients = await collection.find({}).toArray();

        res.json(clients); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'خطأ في جلب العملاء ' });
    }
});

module.exports = Router;
