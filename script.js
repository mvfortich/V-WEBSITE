document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const slides = document.querySelectorAll(".slide");
    const prevSlideButton = document.querySelector(".prev-slide");
    const nextSlideButton = document.querySelector(".next-slide");

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        }
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevSlideButton.addEventListener("click", function() {
        currentIndex--;
        showSlide(currentIndex);
    });

    nextSlideButton.addEventListener("click", function() {
        currentIndex++;
        showSlide(currentIndex);
    });
});
