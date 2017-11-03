$('.carousel').carousel()
var search = document.getElementById("search");
// var spotlight = document.getElementById("search-spotlight");
var carouselImg = document.getElementsByClassName("carousel-img");
// var carouselImg = document.getElementsByClassName("carousel-img")[1];
// var carouselImg = document.getElementsByClassName("carousel-img")[2];

search.addEventListener("click", function(){
    alert("hola");
    for(var i =0; i<carouselImg.length;i++){
        carouselImg[i].classList.add("in-dark");
    }
    // spotlight.classList.remove("d-none");
    
});

