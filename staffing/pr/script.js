document.addEventListener("DOMContentLoaded", function(){
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
  
    hamburger.addEventListener("click", function(){
      navMenu.classList.toggle("active");
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    // Get the index of the active testimonial. Default to 0 if none found.
    let currentIndex = Array.from(testimonials).findIndex(card => card.classList.contains('active'));
    if (currentIndex === -1) {
      currentIndex = 0;
      testimonials[0].classList.add('active');
    }
    
    function showTestimonial(index) {
      // Remove active class from all cards and add to the current one
      testimonials.forEach(card => card.classList.remove('active'));
      testimonials[index].classList.add('active');
    }
    
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });
    
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const orbit = document.querySelector(".orbit");

    // Adding a slight delay for smooth animation start
    setTimeout(() => {
        orbit.style.animation = "rotate 10s linear infinite";
    }, 500);
});
