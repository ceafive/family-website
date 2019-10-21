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

// 5.549712, -0.233874



   