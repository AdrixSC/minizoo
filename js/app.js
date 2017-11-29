var image = document.getElementsByClassName("animal");

var select = document.getElementsByTagName("select");
select.onchange = function() {
    if (select.value == "original") {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.remove("white-black");
            image[i].classList.remove("negative-colors");
            image[i].classList.remove("sepia");
        }

    } else if (select.value == "white-black") {
        image[i].classList.remove("original");
        image[i].classList.remove("negative-colors");
        image[i].classList.aremove("sepia");
    }

}
select.addEventListener("click", onchange);