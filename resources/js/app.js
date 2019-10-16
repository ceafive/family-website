//Adding countdown timer to Section landing
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Dec 14, 2019 01:00:00').getTime(),
    x = setInterval(function() {

      let deadline = new Date().getTime(),
          distance = countDown - deadline;

//Logic for running a function when the clock runs down to one month left
      if (Math.floor(distance / (day)) <= 29){
        document.getElementsByClassName('clock')[0].classList.add('hidden');
        button[0].classList.add('cursor-pointer');
        button[0].classList.remove('cursor-not-allowed');
        button[0].removeEventListener("click", buttonLogic);
          clearInterval(x);
      }
          console.log(Math.floor(distance / (day)));
//
          
          

        document.getElementById('days').innerText = Math.floor(distance / (day));
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        if (Math.floor((distance % (minute)) / second) < 2){
          document.getElementById('secs').innerText = "second"
        }else {
          document.getElementById('secs').innerText = "seconds"
        }
        if (Math.floor((distance % (hour)) / (minute)) < 2){
          document.getElementById('mins').innerText = "minute"
        }else {
          document.getElementById('mins').innerText = "minutes"
        }
        if (Math.floor((distance % (day)) / (hour)) < 2){
          document.getElementById('hrs').innerText = "hour"
        }else {
          document.getElementById('hrs').innerText = "hours"
        }
        if (Math.floor(distance / (day)) < 2){
          document.getElementById('day').innerText = "day"
        }else {
          document.getElementById('day').innerText = "days"
        }
    }, second)
//


//  Background audio script
var media = document.getElementById("player");
var button = document.getElementsByTagName("button");

//Logic for playing audio when Button is clicked //
function buttonLogic() {
  media.play();
  media.muted = false;
  console.log("audio playing")
  alert("Not yet active, check back again soon!")
}
button[0].addEventListener("click", buttonLogic);
//

//Hiding first section and displaying second section after animation
const initial =  document.getElementById('initial');
const landing =  document.getElementById('landing');
initial.classList.add('animated', 'zoomOut');

//Adding 4.6secs timeout before applying hidden and block classes to sections//
setTimeout(function() { 
  landing.classList.remove('hidden');
  landing.classList.add('animated', 'zoomIn');
  initial.classList.add('hidden');
 }, 4600);
 //

   