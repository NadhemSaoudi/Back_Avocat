const express = require('express');
const Router = express.Router();
Router.use(express.json());
const AjoutRendezVous = require('../../model/rendezvous/AjoutRendezVous');

Router.post('/nouveau-rendez-vous', async (req, res) => {
    try {
        const nouveauRendezVous = new AjoutRendezVous({
            date: req.body.date 
        });

        const rendezvousEnregistre = await nouveauRendezVous.save();

        res.status(201).json(rendezvousEnregistre); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création du rendez-vous' });
    }
});

module.exports = Router;
