(function() {
  // Create a button element
  const button = document.createElement('button');
  button.textContent = 'Multiple Shipping Addresses'; // Replace with your desired button text
  button.classList.add('btn-multi-address'); // Add a CSS class for styling (optional)

  // Function to be executed on button click (replace with your functionality)
  button.addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/'
  });

  // Find the cart summary container (adjust selector if necessary)
  const cartSummary = document.querySelector('.cart-summary');
  if (cartSummary) {
    // Append the button to the cart summary container
    cartSummary.appendChild(button);
  } else {
    console.error('Cart summary not found. Button not added.');
  }
})();
