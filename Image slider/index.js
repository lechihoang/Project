const slides = document.querySelectorAll("img.slide");
let slideIndex = 0;
let intervalID = null;

document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){
    if (slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if (index >= slides.length){
        slideIndex = 0;
    }
    else if (index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });    
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}