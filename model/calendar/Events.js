const mongoose = require('mongoose');

const Event=mongoose.model('Event',{
  title: {
    type: String,
    required: true,
    minlength: 2
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  textColor: {
    type: String,
    required: true
  },
  allDay: {
    type: Boolean,
    required: true
  }
});


module.exports = Event;
