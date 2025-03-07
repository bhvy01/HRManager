document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".testimonial-card");
    let currentIndex = 1; // Keep the second card (active one) in the center

    function updateTestimonials(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.add("active");
                card.style.background = "#1cc5a3"; // Active card green
                card.style.color = "white";
            } else {
                card.classList.remove("active");
                card.style.background = "#f8f8f8"; // Default background
                card.style.color = "black";
            }
        });
    }

    document.querySelector(".prev-btn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateTestimonials(currentIndex);
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % cards.length;
        updateTestimonials(currentIndex);
    });

    updateTestimonials(currentIndex); // Initialize with the active one
});
