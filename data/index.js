document.getElementById("led_on").addEventListener("click", () => {
    fetch("led", {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: `32000`
    });
});

document.getElementById("led_off").addEventListener("click", () => {
    fetch("led", {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: `0`
    });
});