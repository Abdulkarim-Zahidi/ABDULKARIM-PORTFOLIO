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


  // Initialize Email.js with your User ID
  emailjs.init("user_your_emailjs_user_id");

  // Function to send the email
  function sendEmail(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const serviceID = "your_emailjs_service_id";
    const templateID = "your_emailjs_template_id";

    emailjs.sendForm(serviceID, templateID, formData).then(
      function (response) {
        console.log("Email sent successfully!", response);
        // Show a success message to the user
        alert("Message sent successfully!");
        form.reset(); // Clear the form fields after successful submission
      },
      function (error) {
        console.log("Failed to send the email.", error);
        // Show an error message to the user
        alert("Failed to send the message. Please try again later.");
      }
    );
  }

  // Add event listener to the form on submit
  document.querySelector(".contact-form").addEventListener("submit", sendEmail);

