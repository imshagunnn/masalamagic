// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservation-form');
  const formSuccess = document.getElementById('form-success');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const formValues = {};
      
      for (let [key, value] of formData.entries()) {
        formValues[key] = value;
      }
      
      // Simple form validation
      let isValid = true;
      const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'guests'];
      
      requiredFields.forEach(field => {
        const input = form.elements[field];
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
      
      if (!isValid) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // In a real application, you would send this data to a server
      // For now, we'll just simulate a successful submission
      
      // Show success message
      if (formSuccess) {
        form.style.opacity = '0';
        setTimeout(() => {
          form.style.display = 'none';
          formSuccess.classList.add('active');
        }, 300);
      }
      
      // Reset form
      form.reset();
    });
  }
  
  // Datepicker enhancement - in a real application you might use a library
  const dateInput = document.getElementById('date');
  if (dateInput) {
    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    // Set default value to today
    if (!dateInput.value) {
      dateInput.value = today;
    }
  }
});