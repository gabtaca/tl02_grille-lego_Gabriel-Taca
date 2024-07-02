
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
    const birthday = new Date("2022-12-02");

    function calculateTimeUntilBirthday() {
        const now = new Date(); 

        // Est ce que l'anniversaire est passé?
        birthday.setFullYear(now.getFullYear());
        if (now > birthday) {
            birthday.setFullYear(now.getFullYear() + 1); 
        }

        const diff = birthday - now; // Difference en milliseconds

        // Calcule du temps restant
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
};