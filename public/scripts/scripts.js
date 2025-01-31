const API_BASE_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("actionForm");

    if (!form) {
        console.error("⚠️ Formulier niet gevonden!");
        return;
    }

    console.log("✅ Formulier gevonden!");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const action = document.getElementById("action").value;
        const details = document.getElementById("details").value;

        console.log(`🚀 Verstuur actie: ${action}, Details: ${details}`);

        fetch(`${API_BASE_URL}/action`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action, details })
        })
        .then(response => {
            console.log("📡 Response ontvangen:", response);
            if (!response.ok) {
                throw new Error(`❌ Server error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("✅ Server response:", data);
            alert(`Response: ${data.message}`);
        })
        .catch(error => console.error("❌ Fetch error:", error));
    });
});



function updateSpeed() {
    console.log("🚀 updateSpeed() is aangeroepen!");
}

function refuel() {
    console.log("⛽ refuel() is aangeroepen!");
}

function setPower() {
    console.log("⚡ setPower() is aangeroepen!");
}

async function fetchStatus() {
    try {
        const response = await fetch(`${API_BASE_URL}/status`);
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        const status = await response.json();

        // ✅ Update de UI
        document.querySelector("#power span").textContent = status.power;
        document.getElementById("speed").textContent = `Speed: ${status.speed}`;
        document.getElementById("fuel").textContent = `Fuel: ${status.fuel}`;

        console.log("✅ Status bijgewerkt:", status);
    } catch (error) {
        console.error("❌ Fout bij ophalen status:", error);
    }
}
fetch(`${API_BASE_URL}/action`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        action: document.getElementById("action").value,
        details: document.getElementById("details").value
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log("✅ Server response:", data);
    alert(`Response: ${data.message}`);
})
.catch(error => console.error("❌ Error:", error));


// **Roep de functie aan om de status op te halen bij het laden van de pagina**
document.addEventListener("DOMContentLoaded", fetchStatus);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const action = document.getElementById("action").value;
    const details = document.getElementById("details").value;

    console.log(`🚀 Verstuur actie: ${action}, Details: ${details}`);

    fetch(`${API_BASE_URL}/action`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, details })
    })
    .then(response => {
        console.log("📡 Response ontvangen:", response);
        if (!response.ok) {
            throw new Error(`❌ Server error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("✅ Server response:", data);
        alert(`Response: ${data.message}`);
    })
    .catch(error => console.error("❌ Fetch error:", error));
});



