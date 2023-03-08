// Get form and fieldsets
const form = document.getElementById('form');
const fieldsets = form.querySelectorAll('fieldset');
// const steps = document.querySelectorAll('#steps');

// Get buttons
const prevBtns = form.querySelectorAll('.prev-btn');
const nextBtns = form.querySelectorAll('.next-btn');

// Initialize current step
let currentStep = 0;

// Show current step
function showStep(step) {
  fieldsets.forEach((fieldset, index) => {
    if (index === step) {
      fieldset.style.display = 'block';      
    } else {
      fieldset.style.display = 'none';
    }
  });
}

// Go to next step
function nextStep() {
  currentStep++;
  if (currentStep > fieldsets.length - 1) {
    currentStep = fieldsets.length - 1;
  }
  showStep(currentStep);
}

// Go to previous step
function prevStep() {
  currentStep--;
  if (currentStep < 0) {
    currentStep = 0;
  }
  showStep(currentStep);
}

// Add event listeners to buttons
nextBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    nextStep();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    prevStep();
  });
});

form.addEventListener('submit', (event) => {
  alert('Form submitted!');
});

// Show first step on load
showStep(currentStep);



// MOBILE
// Get all the fieldsets and the navigation button
const fieldset = document.querySelectorAll('.stepss');
const navBtn = document.querySelector('#next-btn');

// Add a click event listener to the navigation button
navBtn.addEventListener('click', () => {
  // Get the current step
  const currentStep = document.querySelector('.stepss.active');

  // Get the next step
  const nextStep = currentStep.nextElementSibling;

  if (nextStep) {
    // Add the active class to the next step and remove it from the current step
    currentStep.classList.remove('active');
    nextStep.classList.add('active');

    // Change the navigation button text to "Submit" if this is the last step
    if (!nextStep.nextElementSibling) {
      navBtn.textContent = 'Submit';
    }
  } else {
    // Submit the form if there is no next step
    const myForm = document.querySelector('#mobile-form');
    myForm.submit();
  }
});