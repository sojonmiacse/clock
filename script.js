const timeDisplay = document.getElementById('time-display');
const amPmDisplay = document.getElementById('am-pm');
const dateDisplay = document.getElementById('date-display');
const chimeSound = document.getElementById('chime-sound');

// Display Time and Date
function updateClock() {
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const seconds = now.getSeconds();

     const formattedTime = `${pad(hours % 12 || 12)}:${pad(minutes)}:${pad(seconds)}`;
     const amPm = hours >= 12 ? 'PM' : 'AM';
     timeDisplay.textContent = formattedTime;
     amPmDisplay.textContent = amPm;

     const date = now.toDateString();
     dateDisplay.textContent = date;

     // Hourly chime
     if (minutes === 0 && seconds === 0) {
          chimeSound.play();
     }
}

function pad(number) {
     return number.toString().padStart(2, '0');
}

setInterval(updateClock, 1000);

// Night mode (Backlight Switch)
document.getElementById('night-mode-switch').addEventListener('change', (e) => {
     if (e.target.checked) {
          document.body.classList.add('night-mode');
     } else {
          document.body.classList.remove('night-mode');
     }
});
