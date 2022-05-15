// dom elements
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');

// variables
var secCount = 0;
var minCount = 0;
var hourCount = 0;
var twoDigit;
var interval;

// add click event on start button
start.addEventListener('click', function(){
    // make the start button inactive once clicked 
    start.disabled = true;

    // set a function which runs every 1 second 
    interval = setInterval(function(){
        // increment the seconds counter
        secCount++;
        // check if the seconds counter is single digit
        if(secCount < 10){
            twoDigit = `0${secCount}`
            sec.innerText = twoDigit;
        } else {
            sec.innerText = secCount;
        }

        // if secounds counter is greater than 59
        if(secCount > 59){
            // reset the secounds counter to zero
            secCount = 0;
            sec.innerText = `00`;

            // increment the minutes counter
            minCount++;
            // check if the minutes counter is single digit
            if(minCount < 10){
                twoDigit = `0${minCount}`
                min.innerText = twoDigit;
            } else {
                min.innerText = minCount;
            }
        }

        // if minutes counter is greater than 59
        if(minCount > 59){
            // reset the secounds counter to zero
            secCount = 0;
            sec.innerText = `00`;

            // reset the minutes counter to zero
            minCount = 0;
            min.innerText = `00`;

            // increment the hours counter
            hourCount++;
            // check if the hours counter is single digit
            if(hourCount < 10){
                twoDigit = `0${hourCount}`
                hour.innerText = twoDigit;
            } else {
                hour.innerText = hourCount;
            }
        }
    },1000)
});

// add click event on stop button 
stop.addEventListener('click', function(){
    // make the start button active 
    start.disabled = false;
    
    //stop the function from running
    clearInterval(interval);
});

// add click event on reset button
reset.addEventListener('click', function(){
    // make the start button active
    start.disabled = false;
    
    // reset the secounds counter to zero
    secCount = 0;
    sec.innerText = `00`;
    
    // reset the minutes counter to zero
    minCount = 0;
    min.innerText = `00`;

    // reset the hours counter to zero
    hourCount = 0;
    hour.innerText = `00`;

    //stop the function from running
    clearInterval(interval);
});