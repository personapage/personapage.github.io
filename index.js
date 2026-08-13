function updateTime() {
    const now = new Date();
    const utc3 = new Date(now.getTime() + 3 * 60 * 60 * 1000);
    const hours = String(utc3.getUTCHours()).padStart(2, "0");
    const minutes = String(utc3.getUTCMinutes()).padStart(2, "0");
    document.getElementById("current-time").textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 1000);
