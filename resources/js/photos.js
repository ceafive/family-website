 //Logic for toggling the menu items from display to hidden
$(document).ready(function () {  
$('.toggle').click(function() {
  $('.nav').slideToggle(200);  
  });
});
  
 //Logic for changing navigation icon when on mobile view (choosing with svg to display)
const icon = document.getElementsByClassName("icon");
const nav = document.getElementsByClassName("nav");
const toggle = document.getElementsByClassName("toggle");


toggle[0].addEventListener("click", function(){ 
    if(nav[0].style.display == "none" || nav[0].style.display == ""){
        icon[0].classList.add("hidden");
        icon[0].classList.remove("block");
        icon[1].classList.add("block");
        icon[1].classList.remove("hidden");
    } else {
        icon[0].classList.add("block");
        icon[0].classList.remove("hidden");
        icon[1].classList.add("hidden");
        icon[1].classList.remove("block");
    }
});
 


 //Initialize animate on scroll
AOS.init();
 
 //Fetching and displaying photos on Photos page
 function fetchPhotos(){
  const output = [];
 fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => {
    json.forEach(data => {
      if (output.length < 20) {
        output.push(data);
      }
    })
    console.log(output);
    let content = "";
    output.forEach(photo => {
      content += `
      <div class="flex justify-center w-1/2 mb-4 z-40" data-aos="fade-up" data-aos-duration="1000">
        <img src=${photo.url} alt=${photo.id}>
      </div>
      `
    });
    document.getElementById("photos").innerHTML = content;
  })
  .catch((err) => 
    console.log(err));
  }

// fetchPhotos();





   