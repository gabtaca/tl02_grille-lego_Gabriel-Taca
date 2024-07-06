function calculateAge(dateOfBirth) {
    var dob = new Date(dateOfBirth);
    var currentDate = new Date();
    var years = currentDate.getFullYear() - dob.getFullYear();
    var months = currentDate.getMonth() - dob.getMonth();
    if (months < 0 || (months === 0 && currentDate.getDate() < dob.getDate())) {
        years--;
        months += 12;
    }
    return { years: years, months: months };
}

function formatAgeText(age) {
    var yearText = age.years === 1 ? 'an et' : 'ans et';
    var monthText = age.months === 1 ? 'mois,' : 'mois,';
    return age.years + ' ' + yearText + ' ' + age.months + ' ' + monthText;
}

var dateOfBirth = '2022-12-02';
var age = calculateAge(dateOfBirth);
document.getElementById('age').textContent = formatAgeText(age);

window.onload = function() {
    const birthday = new Date("2022-12-22");

    function calculateTimeUntilBirthday() {
        const now = new Date(); 

        birthday.setFullYear(now.getFullYear());
        if (now > birthday) {
            birthday.setFullYear(now.getFullYear() + 1); 
        }

        const diff = birthday - now; 

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = `
            <span class="text-orange-600" style="font-family: 'Bungee Spice', sans-serif; font-size: 24px;">
                Décompte jusqu'à ta fête!:
                ${days} Jours,
                ${hours} heures,
                ${minutes} minutes,
                ${seconds} secondes
            </span>
        `;
    }

    setInterval(calculateTimeUntilBirthday, 1000);

    function isTodayAnniversary() {
        const today = new Date();
        return today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate();
    }

    if (isTodayAnniversary()) {
        createBalloons(30);
    }
};

const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `;
}

function createBalloons(num) {
    for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        balloonContainer.append(balloon);
    }
}

function removeBalloons() {
    balloonContainer.style.opacity = 0;
    setTimeout(() => {
        balloonContainer.remove()
    }, 500)
}

window.addEventListener("click", () => {
    removeBalloons();
});