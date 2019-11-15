const   map_tag = document.getElementById('map-tag');
const       code = document.getElementById('code');
const      map = document.getElementById('map');

let mapDisplay = () => {
    map_tag.classList.remove('xxs:mt-16', 'xl:mt-56')
    code.classList.remove('hidden')
    code.classList.add('block')
}

map_tag.addEventListener('click', mapDisplay)

code.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13 && code.value === "260688") { 
        code.classList.add('hidden')
        code.classList.remove('block')
        code.value = ""
        map_tag.removeEventListener('click', mapDisplay)
        map_tag.innerText = "Click map to open Google Maps"
        map_tag.classList.remove('xxs:mt-16', 'xl:mt-56', 'cursor-pointer')
        map.classList.remove('hidden')
        map.classList.add('block')
    }else if (key === 13 && code.value.length === 6  && code.value !== "260688"){
        alert("Wrong Code Entered")
    }
});