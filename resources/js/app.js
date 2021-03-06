/* eslint-disable no-unused-expressions */
// Declaring variables
const initial = document.getElementById('initial');
const landing = document.getElementById('landing');
const main = document.getElementById('main');
const directions = document.getElementById('directions');
const clock = document.getElementById('clock');
const link = document.getElementById('link');
const button = document.getElementById('button');
const media = document.getElementById('media');
//

// Adding animation to first section after 4secs
initial.classList.add('animated', 'zoomOut');
//

// Adding 4.6secs timeout before applying hidden and block classes to sections
setTimeout(function() {
  landing.classList.remove('hidden');
  landing.classList.add('animated', 'zoomIn');
  initial.classList.add('hidden');
}, 4600);
//

// Logic for playing audio when Button is clicked
function audioLogic() {
  media.play();
  media.muted = false;
  console.log('audio playing');
  alert('Not yet active, check back again soon!');
}
button.addEventListener('click', audioLogic);
//

// Adding countdown timer to Section landing
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  countDown = new Date('Dec 14, 2019 11:00:00').getTime(),
  x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDown - now;

    const daysDisplay = Math.floor(distance / day);
    const hoursDisplay = Math.floor((distance % day) / hour);
    const minutesDisplay = Math.floor((distance % hour) / minute);
    const secondsDisplay = Math.floor((distance % minute) / second);
    const days = document.getElementById('clock').children[0];
    const hours = document.getElementById('clock').children[1];
    const minutes = document.getElementById('clock').children[2];
    const seconds = document.getElementById('clock').children[3];

    // Inputting countdown into div with ID clock //
    days.children[0].innerText = daysDisplay;
    hours.children[0].innerText = hoursDisplay;
    minutes.children[0].innerText = minutesDisplay;
    seconds.children[0].innerText = secondsDisplay;

    daysDisplay < 2
      ? (days.children[1].innerText = 'day')
      : (days.children[1].innerText = 'days');

    hoursDisplay < 2
      ? (hours.children[1].innerText = 'hour')
      : (hours.children[1].innerText = 'hours');

    minutesDisplay < 2
      ? (minutes.children[1].innerText = 'minute')
      : (minutes.children[1].innerText = 'minutes');

    secondsDisplay < 2
      ? (seconds.children[1].innerText = 'second')
      : (seconds.children[1].innerText = 'seconds');

    // Logic for running a function when the clock runs down to one month left
    if (daysDisplay <= 31) {
      button.removeEventListener('click', audioLogic);
      // Logic to make RSVP button active 29 days before
      link.href = '/rsvp.html';
    }
    //

    // Logic for running a function when zero days left
    if (daysDisplay <= 0) {
      clock.classList.add('hidden');
      directions.classList.add('block');
      directions.classList.remove('hidden');
      button.innerText = 'Directions to Venue';
      link.href =
        "https://www.google.com/maps/place/5%C2%B032'59.0%22N+0%C2%B014'02.0%22W/@5.549712,-0.2344212,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d5.5497123!4d-0.2338741";
      link.target = '_blank';
      main.classList.add('xxs:pt-32');
      main.classList.remove('xxs:pt-2', 'xs:pt-16', 'md:pt-24');
      // Function to stop countdown
      clearInterval(x);
    }
    //

    // console.log(Math.floor(distance / (day)));
  }, second);
//

// Logic for toggling the menu items from display to hidden
$(document).ready(function() {
  $('.toggle').click(function() {
    $('.nav').slideToggle(200);
  });
});

// Logic for changing navigation icon when on mobile view (choosing which svg to display)
const icon = document.getElementsByClassName('icon');
const nav = document.getElementsByClassName('nav')[0];
const toggle = document.getElementsByClassName('toggle')[0];

toggle.addEventListener('click', function() {
  if (nav.style.display === 'none' || nav.style.display === '') {
    icon[0].classList.add('hidden');
    icon[0].classList.remove('block');
    icon[1].classList.add('block');
    icon[1].classList.remove('hidden');
  } else {
    icon[0].classList.add('block');
    icon[0].classList.remove('hidden');
    icon[1].classList.add('hidden');
    icon[1].classList.remove('block');
  }
});

// Logic for displaying weather
async function fetchWeather() {
  const CITY_ID = '2306104';
  const APP_ID = '2a563656d98bc5b38c869a2cf6dd2a81';
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&units=metric&appid=${APP_ID}`
  );
  const data = await res.json();
  const weather = data;
  console.log(weather);

  // Rendering
  const temperature = document.getElementById('temperature');
  const degrees = Math.floor(weather.main.temp);

  if (degrees >= 25) {
    temperature.innerHTML = `<span>Temp: </span>${degrees}<span>&#176;</span><span>C</span>`;
    temperature.classList.add('bg-red-600');
  } else {
    temperature.innerHTML = `<span>Temp: </span>${degrees}<span>&#176;</span><span>C</span>`;
    temperature.classList.add('bg-green-600');
  }
}

fetchWeather();

// Logic for sending whatsapp messages when web.whatsapp.com is open
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
