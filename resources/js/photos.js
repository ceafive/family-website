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
 
 //Fetching and displaying photos on Photos page
 setTimeout(()=> {
  async function fetchPhotos(){
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'); // || 'https://jsonplaceholder.typicode.com/photos'
    const data = await res.json();
    const photos = data.drinks;

//Grab photos and insert them into HTML
    let content = "";
    for(photo of photos){
      content += 
      `<div class="flex justify-center xxs:w-1/2 lg:w-1/4 xxs:px-3 mb-4 z-10" data-aos="fade-up" data-aos-duration="1000">
        <img class="myImg w-full lg:max-w-xs cursor-pointer hover:opacity-75" src=${photo.strDrinkThumb} alt="image_${photo.idDrink}">
      </div>`
    };
    document.getElementById("photos").innerHTML = content;

// Get the modal elements
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var images = document.getElementsByClassName("myImg");
    var span = document.getElementById("close");

// Loop over images and insert src attribute to modal image
    for (image of images) {
      image.onclick = function(){
        modal.classList.add("block");
        modal.classList.remove("hidden");
        modalImg.src = this.src;
      }
    }
//Close the modal
      span.onclick = function() { 
        modal.classList.add("hidden");
        modal.classList.remove("block");
      }
  }

fetchPhotos();
}, 3000);

 //Initialize animate on scroll
AOS.init();

//Authorizing Google Photos
  // var GoogleAuth;
  // var SCOPE = 'https://www.googleapis.com/auth/photoslibrary.readonly';
  // function handleClientLoad() {
  //   // Load the API's client and auth2 modules.
  //   // Call the initClient function after the modules load.
  //   gapi.load('client:auth2', initClient);
  // }

  // function initClient() {
  //   // Initialize the gapi.client object, which app uses to make API requests.
  //   // Get API key and client ID from API Console.
  //   // 'scope' field specifies space-delimited list of access scopes.
  //   gapi.client.init({
  //       'apiKey': 'YOUR_API_KEY',
  //       'clientId': 'Y860850718132-9530v1bhvqo71qhm689r6aabprrjvgn2.apps.googleusercontent.com',
  //       'scope': SCOPE
  //   }).then(function () {
  //     GoogleAuth = gapi.auth2.getAuthInstance();

  //     // Listen for sign-in state changes.
  //     GoogleAuth.isSignedIn.listen(updateSigninStatus);

  //     // Handle initial sign-in state. (Determine if user is already signed in.)
  //     var user = GoogleAuth.currentUser.get();
  //     setSigninStatus();

  //     // Call handleAuthClick function when user clicks on
  //     //      "Sign In/Authorize" button.
  //     $('#sign-in-or-out-button').click(function() {
  //       handleAuthClick();
  //     }); 
  //     $('#revoke-access-button').click(function() {
  //       revokeAccess();
  //     }); 
  //   });
  // }

  // function handleAuthClick() {
  //   if (GoogleAuth.isSignedIn.get()) {
  //     // User is authorized and has clicked 'Sign out' button.
  //     GoogleAuth.signOut();
  //   } else {
  //     // User is not signed in. Start Google auth flow.
  //     GoogleAuth.signIn();
  //   }
  // }

  // function revokeAccess() {
  //   GoogleAuth.disconnect();
  // }

  // function setSigninStatus(isSignedIn) {
  //   var user = GoogleAuth.currentUser.get();
  //   var isAuthorized = user.hasGrantedScopes(SCOPE);
  //   if (isAuthorized) {
  //     $('#sign-in-or-out-button').html('Sign out');
  //     $('#revoke-access-button').css('display', 'inline-block');
  //     $('#auth-status').html('You are currently signed in and have granted ' +
  //         'access to this app.');
  //   } else {
  //     $('#sign-in-or-out-button').html('Sign In/Authorize');
  //     $('#revoke-access-button').css('display', 'none');
  //     $('#auth-status').html('You have not authorized this app or you are ' +
  //         'signed out.');
  //   }
  // }

  // function updateSigninStatus(isSignedIn) {
  //   setSigninStatus();
  // }






   