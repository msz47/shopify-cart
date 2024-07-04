if (window.location.pathname.endsWith('/cart') || window.location.pathname.endsWith('/cart/')) {
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
                window.location.href = '/apps/myapp';
            });

            // Insert the button after the 'title-wrapper-with-link' div
            titleWrapper.insertAdjacentElement('afterend', button);
        }
    }
