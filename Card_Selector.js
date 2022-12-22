let slideIndex = 3;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByTagName("img");
    let i = 0;
    if (n < 0) { slideIndex = slides.length }
    if (n > slides.length) { slideIndex = 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0.2";
    }
    slides[slideIndex - 1].style.opacity = "1";

}