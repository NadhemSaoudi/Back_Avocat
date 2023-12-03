const express = require('express');
const Router = express.Router();
Router.use(express.json());
const NewEvent = require('../../model/calendar/Events.js');

Router.post('/NewEvent', async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = new NewEvent(eventData); 
    const savedEvent = await newEvent.save(); 
    console.log('تمت إضافة الحدث بنجاح'); 
    res.status(200).send(savedEvent);
  } catch (err) {
    console.log('حدث خطأ أثناء إضافة الحدث', err); 
    res.status(500).send('حدث خطأ أثناء إضافة الحدث');
  }
});

module.exports = Router;
