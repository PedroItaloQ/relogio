const hora = setInterval(function time() {



today = new Date();

const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

hr = today.getHours();
min = today.getMinutes();
sec = today.getSeconds();

hours.textContent = hr
minutes.textContent = min
seconds.textContent = sec
})