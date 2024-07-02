// main.js
import '../css/index.sass'
import '../css/style.css'


document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const body = document.getElementById("body");
  const card = document.getElementById("card");

  toggleButton.addEventListener("click", () =>{
    
    card.classList.toggle("bg-black")
    card.classList.toggle("bg-pink-500")
    body.classList.toggle("bg-cyan-200")
    body.classList.toggle("bg-black")
  })
})

const card = document.createElement("div");
card.classList = "card-body, bg-black, w-[300px], h-[300px] text-white";

const content = `
<div class-"card>
<p>300px / 300px</p>
</div>`
