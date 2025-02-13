document.querySelectorAll('.team-member').forEach(member => {
    const card = member.querySelector('.card');
    
    member.querySelector('.flip-card').addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        card.classList.toggle('flipped'); // Flip the card
    });

    member.querySelector('.close-card').addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        card.classList.remove('flipped'); // Close the card
    });
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach(slide => slide.style.opacity = '0'); // Hide all slides
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }
    slides[slideIndex - 1].style.opacity = '1'; // Show the current slide
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

if (slides.length > 0) {
    showSlides(); // Start the slideshow if there are slides
}

function changeSlide(n) {
    slideIndex += n - 1; // Adjust the slide index
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    } else if (slideIndex < 1) {
        slideIndex = slides.length; // Go to the last slide
    }
    showSlides(); // Show the updated slide
}

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active'); // Toggle active class
    navLinks.classList.toggle('active'); // Show/hide nav links
});