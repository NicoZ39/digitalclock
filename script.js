function updateClock() {
    const now = new Date();
    
    // Heure
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dayOfWeek = now.toLocaleDateString('fr-FR', { weekday: 'long' });
    const fullDate = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

    document.getElementById('dayOfWeek').textContent = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1); // Majuscule au début
    document.getElementById('fullDate').textContent = fullDate;
}

setInterval(updateClock, 1000);
updateClock();
