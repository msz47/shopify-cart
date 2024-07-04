if (window.location.pathname.endsWith('/cart')) {
        console.log('Cart page loaded');
        var titleWrapper = document.querySelector('.title-wrapper-with-link');

        if (titleWrapper) {
            var div = document.createElement('div');
            div.style.padding = '20px';
            div.style.backgroundColor = 'rgb(0 109 23)'; // Light gray background color
            div.classList.add('custom-shipping-checkbox');
            div.style.position = 'relative';
            div.style.width = 'fit-content';
            div.style.borderRadius = '5px';
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'ship-to-multiple-addresses';
            checkbox.style.marginRight = '10px';
            // Create a new label element
            var label = document.createElement('label');
            label.htmlFor = 'ship-to-multiple-addresses';
            label.innerText = 'Ship to Multiple Addresses';
            label.style.color = 'white';

            div.appendChild(checkbox);
            div.appendChild(label);
            

            // Add click event listener to navigate to YouTube
           checkbox.addEventListener('change', function() {
                    if (checkbox.checked) {
                        window.location.href = 'apps/myapp';
                    }
            });

            // Insert the button after the 'title-wrapper-with-link' div
            titleWrapper.insertAdjacentElement('afterend', div);
        }
    }
