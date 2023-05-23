filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function myComplain(){

  location.replace("https://elaborate-sable-4145d4.netlify.app")
}

function myTemple(){

  location.replace("https://diwari-sthan-mandir.netlify.app")
}

function myWildlife(){

  location.replace("https://glittering-cobbler-e226eb.netlify.app")
}


function myWhatsapp(){

  location.replace("https://wa.link/g2pu4u")
}

function myWhatsapp(){

  location.replace("https://wa.link/g2pu4u")
}

function myLinkedin(){

  location.replace("https://www.linkedin.com/in/maruti-nandan-a256b2121")
}

function myInstagram(){
 
  location.replace("https://instagram.com/_maruti_nandan?igshid=OTk0YzhjMDVlZA==")
}

function myTelegram(){
  location.replace("https://msng.link/o?maruti12344=tg") 
}

function myGithub(){
  location.replace("https://github.com/maruti12345")
}

function myFacebook(){
  location.replace("https://www.facebook.com/maruti.nandan.79219")
}