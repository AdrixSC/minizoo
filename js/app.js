var image = document.getElementsByClassName("animal");

var select = document.getElementById("nav");

select.onchange = function(e) {
  console.log(e);
for (var i = 0; i < image.length; i++) {
  var items = image[i]
    if (select.value == "white-black") {
        items.classList.add("white-black");
        items.classList.remove("invert");
        items.classList.remove("sepia");
        items.classList.remove("original");

      } else if (select.value == "sepia") {
         items.classList.add("sepia");
         items.classList.remove("invert");
         items.classList.remove("original");
         items.classList.remove("white-black");

       } else if (select.value == "invert") {
          items.classList.add("invert");
          items.classList.remove("sepia");
          items.classList.remove("white-black");
          items.classList.remove("original");

        }else if (select.value == "original") {
           items.classList.add("original");
           items.classList.remove("sepia");
           items.classList.remove("white-black");
           items.classList.remove("invert");
         }

}
}

//document.addEventListener("click", onchange);
