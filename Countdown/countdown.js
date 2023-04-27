const countDownDate = new Date("2023-10-28").getTime();

const time = setInterval(() => {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    let days = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor((distance% (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance% (1000*60*60))/(1000*60));
    let seconds = Math.floor((distance% (1000*60))/(1000));

    let countdown = document.getElementById("countdown");
    countdown.innerHTML = days + " " + hours + " " + minutes + " " + seconds + " ";

    if (distance == 0){
        clearInterval(time);
        document.getElementById("message").innerHTML = "Happy Birthday Queen!";
    }

}, 1000);