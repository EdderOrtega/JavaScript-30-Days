function setDate() {
    const now = new Date();
    //lógica de los segundos
    const seconds = now.getSeconds();
    const secondhand = document.querySelector(".second-hand");
    const secondsDegrees = ((seconds / 60) * 360)+90;
    secondhand.style.transform =`rotate(${secondsDegrees}deg)`;
    secondsDegrees === 90 ? 
    secondhand.style.transitionProperty = "none":
    secondhand.style.transitionProperty = "transform"; 
    
    //lógica de los minutos
    const minutes = now.getMinutes();
    const minuteshand = document.querySelector(".minute-hand");
    const minutesDegrees = ((minutes / 60) * 360)+90;
    minuteshand.style.transform =`rotate(${minutesDegrees}deg)`;
    minutesDegrees === 90 ? 
    minuteshand.style.transitionProperty = "none":
    minuteshand.style.transitionProperty = "transform"; 
    //lógica de las horas

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360)+90;
    const hourshand = document.querySelector(".hour-hand");
    hourshand.style.transform =`rotate(${hourDegrees}deg)`;
    hourDegrees === 90 ? 
    hourshand.style.transitionProperty = "none":
    hourshand.style.transitionProperty = "transform"; 
    
    //reloj digital
    document.getElementById("day").textContent = now.getDate().toString().padStart(2,"0") + "/";
    document.getElementById("month").textContent = (now.getMonth() + 1).toString().padStart(2,"0") + "/";
    document.getElementById("year").textContent = now.getFullYear().toString().padStart(2,"0");
    document.getElementById("hour").textContent = hour.toString().padStart(2,"0") + " :";
    document.getElementById("minute").textContent = minutes.toString().padStart(2, "0") + " :";
    document.getElementById("second").textContent = seconds.toString().padStart(2,"0");
}

setInterval(() => {
    setDate();
}, 1000);