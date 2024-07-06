// main.js
import '../css/index.sass'
import '../css/style.css'
import '../js/age.js'


document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('location');

    function updateSelectedOption() {
        const options = selectElement.options;

        for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const icon = option.getAttribute('data-icon');
        const countryName = option.textContent.replace(/⚑ /g, '');

        if (option.selected) {
            option.innerHTML = `${icon} ${countryName}`;
        } else {
            option.innerHTML = countryName;
        }
        }
    }

    updateSelectedOption();
    
    selectElement.addEventListener('change', updateSelectedOption);
});

//dropdown footer
document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("exp_dropdown");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var arrow = this.querySelector(".arrow");

        if (content.style.display === "block") {
            content.style.display = "none";
            arrow.classList.remove("rotate");
        } else {
            content.style.display = "block";
            arrow.classList.add("rotate");
        }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
        header.style.transform = 'translateY(-100%)';
        } else {
        header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
});