document.getElementById('submitButton').addEventListener('click', function(event) {
  var email = document.getElementById('emailInput').value;
  var successMessage = document.querySelector('.success');
  var errorMessage = document.querySelector('.notification .error');
  var emailInput = document.getElementById('emailInput');
  var submitButton = document.getElementById('submitButton');

  if (email.trim() === '') {
    errorMessage.textContent = 'Please enter an email.';
    errorMessage.style.display = 'block';
    errorMessage.style.color = 'gray';
    emailInput.style.border = '1px solid red';
  } else if (!validateEmail(email)) {
    errorMessage.textContent = 'Valid email required.';
    errorMessage.style.display = 'block';
    errorMessage.style.color = 'red';
    emailInput.style.border = '1px solid red';
  } else {
    emailInput.style.border = '';
    errorMessage.style.display = 'none';
    emailInput.value = '';
    successMessage.style.display = 'block';
  }
});

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// email validation function end.
// ninja

document.querySelector('.close-button').addEventListener('click', function() {
  var successDiv = document.querySelector('.success');
  if (successDiv) {
    successDiv.style.display = 'none';
  }
});


// newsletter subscription success clsoe button function end.
// ninja


function checkViewportWidth() {
  const viewportWidth = window.innerWidth;
  const mobileDiv = document.querySelector('.mobile-image');
  const desktopDiv = document.querySelector('.desktop-image');

  if (viewportWidth > 768 && mobileDiv && desktopDiv) {
      mobileDiv.style.display = 'none';
      desktopDiv.style.display = 'block';
    } else if (viewportWidth <= 768 && mobileDiv && desktopDiv) {
      mobileDiv.style.display = 'block';
      desktopDiv.style.display = 'none';
  }
}

checkViewportWidth();

window.addEventListener('resize', checkViewportWidth);

// viewport width check and div toggle function end.
// ninja

