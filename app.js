(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const galleryImages = document.querySelectorAll('.portfolios .portfolio-item img');
const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
const fullscreenImage = fullscreenOverlay.querySelector('img');

// Function to show image in full-screen
function showFullscreenImage(imageSrc) {
    fullscreenImage.src = imageSrc;
    fullscreenOverlay.style.display = 'flex';
}

// Function to hide full-screen image
function hideFullscreenImage() {
    fullscreenOverlay.style.display = 'none';
}

// Add click event listener to each image in the gallery
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        showFullscreenImage(image.src);
    });
});

// Add click event listener to the full-screen overlay to close it
fullscreenOverlay.addEventListener('click', hideFullscreenImage);
