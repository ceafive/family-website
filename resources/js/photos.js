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
//  fetch('https://jsonplaceholder.typicode.com/photos')
 fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
  .then(response => response.json())
  .then(json => {
    json.drinks.forEach(data => {
      if (output.length < 20) {
        output.push(data);
      }
    })
    // console.log(output);

    let content = "";
    output.forEach(photo => {
      content += 
      `<div class="flex justify-center xxs:w-1/2 lg:w-1/4 xxs:px-3 mb-4 z-10" data-aos="fade-up" data-aos-duration="1000">
      <img class="myImg w-full lg:max-w-xs cursor-pointer hover:opacity-75" src=${photo.strDrinkThumb} alt="image_${photo.idDrink}">
    </div>`
    });
    document.getElementById("photos").innerHTML = content;

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal 
    var modalImg = document.getElementById("img01");
    var img = document.getElementsByClassName("myImg");
    // console.log(img);
   
    var i;
    for (i = 0; i < img.length; i++) {
      img[i].onclick = function(){
        modal.classList.add("block");
        modal.classList.remove("hidden");
        modalImg.src = this.src;
      }
    }
   
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.classList.add("hidden");
      modal.classList.remove("block");
    }
  })
  .catch((err) => 
    console.log(err));
  }

fetchPhotos();




   