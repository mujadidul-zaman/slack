document.addEventListener("DOMContentLoaded", () => {
    const currentTimeUTC = document.getElementById("currentTimeUTC");
    const currentDay = document.getElementById("currentDay");

    function updateTimeAndDay() {
        const now = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        currentTimeUTC.textContent = now.toUTCString().split(' ')[4]; // Extracts time in HH:MM:SS format
        currentDay.textContent = days[now.getUTCDay()]; // Gets the current day of the week
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
