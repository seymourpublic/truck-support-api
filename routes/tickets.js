const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Create a new breakdown ticket
router.post('/', async (req, res) => {
    try {
        const { driverName, truckRegistration, location, breakdownType, description } = req.body;
        const newTicket = new Ticket({
            driverName,
            truckRegistration,
            location,
            breakdownType,
            description
        });
        const ticket = await newTicket.save();
        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all tickets
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single ticket by ID
router.get('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
