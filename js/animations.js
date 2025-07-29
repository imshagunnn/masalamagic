// Additional animations and effects
document.addEventListener('DOMContentLoaded', () => {
  // Gallery hover effect
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('.gallery-overlay').style.opacity = '1';
      item.querySelector('.gallery-info').style.transform = 'translateY(0)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.querySelector('.gallery-overlay').style.opacity = '0';
      item.querySelector('.gallery-info').style.transform = 'translateY(20px)';
    });
  });
  
  // Animate hero content on load
  setTimeout(() => {
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, 300 * index);
    });
  }, 500);
  
  // Team member hover animation
  const teamMembers = document.querySelectorAll('.team-member');
  
  teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
      member.style.transform = 'translateY(-10px)';
    });
    
    member.addEventListener('mouseleave', () => {
      member.style.transform = 'translateY(0)';
    });
  });
  
  // Menu item hover animation
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-10px)';
      item.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
      item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
  });
});