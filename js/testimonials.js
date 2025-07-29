// Testimonials slider functionality
document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.testimonial-arrow.prev');
  const nextButton = document.querySelector('.testimonial-arrow.next');
  
  let currentIndex = 0;
  const totalTestimonials = testimonials.length;
  
  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });
    
    // Deactivate all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show selected testimonial and activate corresponding dot
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentIndex = index;
  }
  
  function nextTestimonial() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= totalTestimonials) {
      nextIndex = 0;
    }
    showTestimonial(nextIndex);
  }
  
  function prevTestimonial() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = totalTestimonials - 1;
    }
    showTestimonial(prevIndex);
  }
  
  // Add click events to dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      showTestimonial(index);
    });
  });
  
  // Add click events to arrows
  if (prevButton) {
    prevButton.addEventListener('click', prevTestimonial);
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', nextTestimonial);
  }
  
  // Auto rotate testimonials
  let autoRotate = setInterval(nextTestimonial, 5000);
  
  // Pause auto rotate on hover
  const testimonialContainer = document.querySelector('.testimonials-slider');
  if (testimonialContainer) {
    testimonialContainer.addEventListener('mouseenter', () => {
      clearInterval(autoRotate);
    });
    
    testimonialContainer.addEventListener('mouseleave', () => {
      autoRotate = setInterval(nextTestimonial, 5000);
    });
  }
});