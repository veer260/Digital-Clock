const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
function setSecond() {

    const now = new Date();
    
    let seconds = now.getSeconds();
    let secondsInDeg = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsInDeg}deg)`;

    let minutes = now.getMinutes();
    let minutesInDeg = ((seconds/60) + minutes)/60 * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesInDeg}deg)`;

    let hours = now.getHours();
    let hoursInDeg = ((seconds)/3600 + (minutes/60) + hours)/12 * 360 + 90;
    hourHand.style.transform = `rotate(${hoursInDeg}deg)`;

}

setInterval(setSecond, 1000);