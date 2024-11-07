// Timer setup
let countdown = document.getElementById('countdown');
let blowout = document.getElementById('blowout');
let flames = document.querySelectorAll('.flame');
let birthdayMessage = document.getElementById('birthday-message'); // Doğum günü mesajı
let timeLeft = 3;

function updateTimer() {
    countdown.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        blowout.style.display = 'block'; // Show "Üfür!" text
        flames.forEach(flame => {
            flame.style.animation = 'extinguish 2s forwards'; // Apply extinguish animation to flame
        });
        
        // 1 saniyə sonra doğum günü mesajını göstər
        setTimeout(() => {
            birthdayMessage.style.display = 'block'; // Show birthday message after 1 second
        }, 1000); // 1000ms = 1 saniyə
    }
    timeLeft--;
}

// Start countdown
let timerInterval = setInterval(updateTimer, 1000);
