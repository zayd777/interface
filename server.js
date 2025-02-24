// Install required packages: express, body-parser 
// Don't forget to actually install these!
// Middleware (goede volgorde)
const { getRandomSensorData, getRandomResource } = require('interface2-p2-aangeleverd');



const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // ✅ Correcte plek

const app = express();
const PORT = 3000;


// Middleware
app.use(cors()); // ✅ Nu op de juiste plek!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/scripts', express.static(__dirname + '/public/scripts', { 
    setHeaders: (res, path) => {
        res.setHeader("Content-Type", "application/javascript");
    }
}));


// In-memory status data for the spacecraft
let spacecraftStatus = {
    power: null,
    speed: null,
    fuel: null
};

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get current status of the spacecraft
app.get('/status', (req, res) => {
    res.json({
        power: `${Math.floor(Math.random() * 100)}%`,
        speed: `${Math.floor(Math.random() * 20)} km/h`,
        fuel: `${Math.floor(Math.random() * 100)}%`,
        sensors: getRandomSensorData(),  // ✅ Haalt willekeurige sensorwaarden op
        resources: getRandomResource()   // ✅ Haalt willekeurige grondstoffen op
    });
});



// Handle spacecraft actions
app.post('/action', (req, res) => {
    const { action, details } = req.body;
    console.log(`Actie ontvangen: ${action} - Details: ${details}`);
    res.json({
        message: "Actie succesvol uitgevoerd!",
        action: action,
        details: details
    });
});



// Start the server
app.listen(PORT, () => {
    console.log(`Spacecraft backend is running on http://localhost:${PORT}`);
});


app.use('/styles', express.static(__dirname + '/public/styles'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));
app.use('/images', express.static(__dirname + '/public/images'));

