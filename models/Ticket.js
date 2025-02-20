const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    driverName: { type: String, required: true },
    truckRegistration: { type: String, required: true },
    location: { type: String, required: true },
    breakdownType: { type: String, required: true },
    description: { type: String, required: true },
    timeReported: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', TicketSchema);
