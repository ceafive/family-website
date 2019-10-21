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
        document.getElementById('clock').classList.add('hidden');
        button[0].classList.add('cursor-pointer');
        button[0].classList.remove('cursor-not-allowed');
        button[0].removeEventListener("click", buttonLogic);
        // Logic to make RSVP button active 29 days before
        document.getElementById("rsvp").href = "/rsvp.html"
          clearInterval(x);
      }
          // console.log(Math.floor(distance / (day)));
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


 //Logic for sending whatsapp messages when web.whatsapp.com is open
 /* 
 function simulateMouseEvents(element, eventName) 
{ 
    var mouseEvent = document.createEvent('MouseEvents'); 
    mouseEvent.initEvent(eventName, true, true); 
    element.dispatchEvent(mouseEvent); 
} 
  

var now = new Date(); 
  
// Replace Hours, Mins and secs with your
// desired time in 24 hour time format e.g.
// var rt = new Date(now.getFullYear(), now.getMonth(),
// now.getDate(), Hours, Minutes, Sec, 0) - now;
// to send message at 2.30PM
var rt = new Date(now.getFullYear(), now.getMonth(), 
                now.getDate(), 23, 06, 00, 0) - now;  
  
  
  
if (rt < 0) { 
    rt += 86400000;  
} 
  
setTimeout(startTimer, rt); 
  
  
// Replace My Contact Name with the name
// of your WhatsApp contact or group e.g. title="Peter Parker"
name = "Jason Ami" 
  
    simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown'); 
  
function startTimer() 
{ 
    setTimeout(myFunc, 3000); 
} 
  
startTimer(); 
  
var eventFire = (MyElement, ElementType) => { 
    var MyEvent = document.createEvent("MouseEvents"); 
    MyEvent.initMouseEvent 
     (ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
    MyElement.dispatchEvent(MyEvent); 
}; 
  
function myFunc() 
{ 
  
    messageBox = document.querySelectorAll("[contenteditable='true']")[0]; 
  
    message = "Hey Jelly"; // Replace My Message with your message
  
    counter = 5; // Replace 5 with the number of times you want to send your message
  
    for (i = 0; i < counter; i++) { 
        event = document.createEvent("UIEvents"); 
        messageBox.innerHTML = message // test it
        event.initUIEvent("input", true, true, window, 1); 
        messageBox.dispatchEvent(event); 
  
        eventFire(document.querySelector('span[data-icon="send"]'), 'click'); 
    } 
} 
 */

// 1573693200000