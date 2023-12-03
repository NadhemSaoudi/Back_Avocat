const express = require('express');
const Router = express.Router();
Router.use(express.json());
const mongoose = require('mongoose');

Router.get('/events', async (req, res) => {
  try {
    const collection = mongoose.connection.db.collection('Events'); 
    const Events = await collection.find({}).toArray();
    res.json(Events);
    console.log('تم استرجاع جميع الأحداث بنجاح'); 
  } catch (err) {
    console.log('حدث خطأ أثناء استرجاع الأحداث', err); 
    res.status(500).send('حدث خطأ أثناء استرجاع الأحداث');
  }
});

module.exports = Router;
