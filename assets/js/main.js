$('.carousel').carousel()
var search = document.getElementById("search");
var spotlight = document.getElementById("search-spotlight");
var carouselImg = document.getElementsByClassName("carousel-img");
var carouselImg = document.getElementsByClassName("carousel-img")[1];
var carouselImg = document.getElementsByClassName("carousel-img")[2];

search.addEventListener("click", function(){
    for(var i =0; i<carouselImg.length;i++){
        carouselImg[i].classList.add("in-dark");
    }
    spotlight.classList.remove("d-none"); 
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn('slow');
        }else{
            $('#scroll').fadeOut('slow');
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});