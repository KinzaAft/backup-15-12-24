let btn = document.querySelector("#menu");
let menu = document.querySelector("ul");

btn.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

// for nav bar code 
for (let i = 0; i < 128; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
    bubble.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
    bubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
    bubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
    bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);
    document.querySelector('.bubbles').appendChild(bubble);
}






// gallery 
// Initialize Masonry.js for the gallery layout
new Masonry("#unsplash-results", {
    itemSelector: ".unsplash-image-wrapper", // Target each image wrapper as an item
    columnWidth: ".unsplash-image-wrapper", // Use the width of the image wrapper as the column width
    percentPosition: true, // Use percentages for positioning to maintain responsiveness
    gutter: 15, // Space between columns in pixels
    transitionDuration: "0.3s", // Smooth animation duration for layout changes
    horizontalOrder: false, // Disables horizontal ordering, allowing Masonry to flow vertically
    stagger: 50 // Adds a delay between transitions for a staggered effect
});

// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons with the class "hover-button"
    const buttons = document.querySelectorAll(".hover-button");

    // Loop through each button and add a click event listener
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Find the parent wrapper of the clicked button
            const wrapper = button.closest(".unsplash-image-wrapper");

            // Find the overlay within the same wrapper
            const overlay = wrapper.querySelector(".overlay");

            // Hide the button by adding the "hidden" class
            button.classList.add("hidden");

            // Show the overlay by adding the "active" class
            overlay.classList.add("active");

            // Simulate a delay (e.g., for loading) before hiding the overlay
            setTimeout(() => {
                overlay.classList.remove("active"); // Remove the overlay
                button.classList.remove("hidden"); // Optionally, show the button again
            }, 3000); // 3 seconds delay
        });
    });
});