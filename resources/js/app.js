
//Adding countdown timer to header
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Dec 14, 2019 11:00:00').getTime(),
    x = setInterval(function() {

      let deadline = new Date().getTime(),
          distance = countDown - deadline;
        //   console.log(Math.floor(distance/day));

        document.getElementById('days').innerText = Math.floor(distance / (day));
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        if (Math.floor((distance % (minute)) / second) < 2){
          document.getElementById('secs').innerText = "sec"
        } else {
          document.getElementById('secs').innerText = "secs"
        }
        if (Math.floor((distance % (hour)) / (minute)) < 2){
          document.getElementById('mins').innerText = "minute"
        } else {
          document.getElementById('mins').innerText = "minutes"
        }
        if (Math.floor((distance % (day)) / (hour)) < 2){
          document.getElementById('hrs').innerText = "hour"
        } else {
          document.getElementById('hrs').innerText = "hours"
        }
        if (Math.floor(distance / (day)) < 2){
          document.getElementById('day').innerText = "day"
        } else {
          document.getElementById('day').innerText = "days"
        }
    }, second)


//Adding animations to initial and header using animate.css
    const initial =  document.getElementById('initial');
    const header =  document.getElementById('header');
    initial.classList.add('animated', 'bounceOutLeft');
    header.classList.add('animated', 'bounceInRight');
    
    initial.addEventListener('animationend', function() { 
      initial.classList.add("hidden");
      initial.classList.remove("block");
      header.classList.add("block");
      header.classList.remove("hidden");
     })
