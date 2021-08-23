/**
 *
 * Use Loops , Functions
 *
 * And Manipulate the DOM
 *
 *
 *
 */




//This is a JSON.. JavaScript Object Notion
var avengers = [{
  name: "black-widow.jpg",
  alt: "The Black widow is my fav"
}, {
  name: "iron-man.jpg",
  alt: "I am IRON MAN"
}, {
  name: "captain-marvel.jpg",
  alt: "The Prettiest"
}, {
  name: "dr-strange.jpg",
  alt: "It's precisely what's kept you from greatness"
}, {
  name: "the-hulk.jpg",
  alt: "It's like I was MEANT FOR THIS"
}, {
  name: "thor.jpg",
  alt: "Bring me THANOS!!!!"
}, {
  name: "hawk-eye.jpg",
  alt: "The Black widow forever"
}, {
  name: "spiderman.jpg",
  alt: "Big FAN Of CAP"
}];

const imageUrl = "./assets/images";

return_grid();

function return_grid(){
  document.getElementById("gallery").innerHTML = function () {
  let gridHTML = '';
  avengers.forEach(avenger => {
      gridHTML += generateColumn(avenger.name, avenger.alt);
      });
    return gridHTML;
  }();
}

function generateColumn(imgSrc, imgAlt) {
  return `<div class="col-12 d-flex justify-content-center align-items-center col-md-6 col-lg-3">
          <img class="img-fluid" src="${imageUrl}/${imgSrc}" alt="${imgAlt}">
      </div>`;
}

// In order to run this function, you need to keep a photo of the avanegr to be added in the ./assets/images directory with the file name as the name of the avenger (which is to be plaved in the form). For example, try loki in form.
function add_to_avengers_arr(){
  var newobj = {name: document.getElementById("avengerName").value + ".jpg", alt: document.getElementById("avengerAlt").value};
  avengers.push(newobj);

return_grid();
}

function del_from_avengers_arr(){
  avengers.splice(document.getElementById("removePic").value - 1,1);
  return_grid();
}
