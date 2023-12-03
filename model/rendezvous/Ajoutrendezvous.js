const mongoose = require('mongoose');
const Ajoutrendezvous=mongoose.model('rendezvous',{

    date: {
        type: Date,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    lieu: {
        type: String,
        required: true
    }
})
module.exports=Ajoutrendezvous

