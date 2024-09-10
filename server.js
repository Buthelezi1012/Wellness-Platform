// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Simple in-memory store (you'd replace this with a real database)
let stressLogs = [];

// Endpoint for logging stress
app.post('/log-stress', (req, res) => {
    const { employeeId, stressLevel } = req.body;
    stressLogs.push({ employeeId, stressLevel, date: new Date() });
    res.status(200).send('Stress logged successfully!');
});

// Endpoint for HR to view logs
app.get('/stress-data', (req, res) => {
    res.json(stressLogs);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
