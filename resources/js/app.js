
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

// Background audio script
var media = document.getElementById("player");
var button = document.getElementsByTagName("button");
button[0].addEventListener("click", function () {
  media.play();
  media.muted = false;
  console.log("playing")
  alert("Not yet active, check back again soon!")
})

//Hiding first section and displaying second section
const initial =  document.getElementById('initial');
const landing =  document.getElementById('landing');


initial.addEventListener('animationend', function() { 
  initial.classList.add('animated', 'zoomOut');
  landing.classList.add('animated', 'zoomIn');
  landing.classList.add('block');
  landing.classList.remove('hidden');
  initial.classList.add('hidden');
 });

   