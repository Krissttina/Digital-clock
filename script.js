setInterval(()=>{
    const time = document.querySelector('#time');
    let date = new Date();
    let hourse = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let daytime = "AM";

    if(hourse > 12){
        daytime = "PM";
        //hourse = hourse - 12;
    }

    if(hourse < 10){
        hourse = "0" + hourse;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    time.textContent = hourse + ":" + minutes + ":" + seconds + " " + daytime;
})