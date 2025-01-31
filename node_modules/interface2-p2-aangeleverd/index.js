// spacecraft-utils: Een simpele module voor ruimtevoertuig sensordata
function getRandomSensorData() {
    return {
        temperature: (Math.random() * 100).toFixed(2) + "°C",
        radiation: (Math.random() * 50).toFixed(2) + " µSv/h",
        pressure: (Math.random() * 10).toFixed(2) + " kPa"
    };
}

function getRandomResource() {
    const resources = ["Water", "Zilver", "IJzer", "Goud", "Titanium"];
    return resources[Math.floor(Math.random() * resources.length)];
}

module.exports = { getRandomSensorData, getRandomResource };
