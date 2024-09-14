function updateClock() {
    const now = new Date();
    
    // Heure
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fullDate = now.toLocaleDateString('fr-FR', options);
    const [day, date] = fullDate.split(", ");
    
    // Mise à jour de l'affichage
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    document.getElementById('day').textContent = day;
    document.getElementById('fullDate').textContent = date;
}

setInterval(updateClock, 1000);
updateClock();
