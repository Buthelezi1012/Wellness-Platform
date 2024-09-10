// models/StressLog.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StressLogSchema = new Schema({
    employeeId: String,
    stressLevel: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StressLog', StressLogSchema);
