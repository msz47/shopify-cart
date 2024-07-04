// custom-script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if the current page is the cart page
    if (window.location.pathname.endsWith('/cart')) {
            console.log('Cart page loaded');
        // Function to inject the button
        function injectButton() {
            // Check if the button is not already injected
            if (!document.querySelector('.custom-shipping-button')) {
                // Create a new button element
                 var button = document.createElement('button');
                    button.id = 'new-shipping-button';
                    button.innerText = 'New Shipping';
                    button.classList.add('btn', 'btn-primary');
        
                    // Apply custom CSS styles to ensure it's on top
                    button.style.position = 'relative';
                    button.style.marginTop = '10px'; // Adjust as needed
                    button.style.backgroundColor = '#007bff';
                    button.style.color = 'white';
                    button.style.border = 'none';
                    button.style.padding = '10px 20px';
                    button.style.fontSize = '16px';
                    button.style.cursor = 'pointer';
                    button.style.borderRadius = '5px';

            // Add click event listener to navigate to YouTube
            button.addEventListener('click', function() {
                window.location.href = 'https://sa-traders47.myshopify.com/apps/proxy';
            });

                
                // Define the button click behavior (example: redirect to checkout)
                button.onclick = function() {
                    window.location.href = '/checkout'; // Replace with your desired action
                };
                
                // Append the button to the cart page
                var cartElement = document.querySelector('.cart__footer'); // Adjust selector based on your cart structure
                if (cartElement) {
                    cartElement.appendChild(button);
                }
            }
        }

        // Initial button injection
        injectButton();

        // Use MutationObserver to watch for changes in the cart page
        var cartObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                injectButton();
            });
        });

        // Target the cart container for mutations
        var cartElement = document.querySelector('.cart__footer'); // Adjust selector based on your cart structure
        if (cartElement) {
            cartObserver.observe(cartElement, { childList: true, subtree: true });
        }
    }
});

if (window.location.pathname.endsWith('/cart')) {
        // The cart page has loaded
        console.log('Cart page loaded');

        // Find the element with class 'title-wrapper-with-link'
        var titleWrapper = document.querySelector('.title-wrapper-with-link');

        if (titleWrapper) {
            // Add your custom logic here
            // For example, create a custom button
            var button = document.createElement('button');
            button.id = 'new-shipping-button';
            button.innerText = 'New Shipping';
            button.classList.add('btn', 'btn-primary');

            // Apply custom CSS styles to ensure it's on top
            button.style.position = 'relative';
            button.style.marginTop = '10px'; // Adjust as needed
            button.style.backgroundColor = '#007bff';
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.padding = '10px 20px';
            button.style.fontSize = '16px';
            button.style.cursor = 'pointer';
            button.style.borderRadius = '5px';

            // Add click event listener to navigate to YouTube
            button.addEventListener('click', function() {
                window.location.href = 'https://sa-traders47.myshopify.com/apps/proxy';
            });

            // Insert the button after the 'title-wrapper-with-link' div
            titleWrapper.insertAdjacentElement('afterend', button);
        }
    }
