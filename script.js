// Səhifə tam yükləndikdən sonra kodu işə salmaq üçün
document.addEventListener('DOMContentLoaded', () => {

    // DOM elementlərini seçirik
    const countdownElement = document.getElementById('countdown');
    const blowoutElement = document.getElementById('blowout');
    const flames = document.querySelectorAll('.flame');
    const birthdayMessageElement = document.getElementById('birthday-message');
    
    let timeLeft = 10;

    // Taymeri yeniləyən funksiya
    function updateTimer() {
        // Rəqəmləri ekranda göstəririk
        countdownElement.textContent = timeLeft;

        // Vaxt bitdikdə...
        if (timeLeft === 0) {
            // Taymeri dayandırırıq
            clearInterval(timerInterval);
            
            // Geriyə sayımı gizlədirik
            document.getElementById('countdown-container').classList.add('hidden');
            
            // "Üfür" mətnini göstəririk (animasiya ilə)
            blowoutElement.classList.remove('hidden');
            
            // Şamları söndürmə animasiyasını başladırıq
            flames.forEach(flame => {
                // Orijinal kodunuzdakı kimi birbaşa animasiyanı təyin edirik
                flame.style.animation = 'extinguish 1.5s forwards ease-out';
            });
            
            // "Üfür" yazısını 2 saniyə sonra gizlədib, əsas təbriki göstəririk
            setTimeout(() => {
                blowoutElement.classList.add('hidden');
                birthdayMessageElement.classList.remove('hidden');
            }, 2000); // 2 saniyə (2000ms)
        }
        
        // Vaxtı bir saniyə azaldırıq
        timeLeft--;
    }

    // Taymeri hər saniyə (1000ms) işə salırıq
    const timerInterval = setInterval(updateTimer, 1000);
});
