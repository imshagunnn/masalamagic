// Menu tab functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuCategories = document.querySelectorAll('.menu-category');
  
  function showCategory(categoryId) {
    // Hide all categories
    menuCategories.forEach(category => {
      category.classList.remove('active');
    });
    
    // Show selected category
    const targetCategory = document.getElementById(categoryId);
    if (targetCategory) {
      targetCategory.classList.add('active');
    }
    
    // Update active tab
    menuTabs.forEach(tab => {
      if (tab.dataset.category === categoryId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
  
  // Add click event to tabs
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const categoryId = tab.dataset.category;
      showCategory(categoryId);
    });
  });
});