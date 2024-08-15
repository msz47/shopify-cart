var div = document.createElement('div');
div.style.padding = '8px 15px 10px 8px';
div.style.backgroundColor = '#008060';
div.classList.add('custom-shipping-checkbox');
div.style.position = 'relative';
div.style.width = 'fit-content';
div.style.borderRadius = '3px';
div.style.marginBottom = '10px';

var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'ship-to-multiple-addresses';
checkbox.style.marginRight = '10px';

var label = document.createElement('label');
label.htmlFor = 'ship-to-multiple-addresses';
label.innerText = 'Ship to Multiple Addresses';
label.style.color = 'white';

function addCheckboxAndLabel(parentElement) {
    if (parentElement && !document.querySelector('.custom-shipping-checkbox')) {
        div.appendChild(checkbox);
        div.appendChild(label);
        parentElement.insertAdjacentElement('afterend', div);
    }
}

function removeMultiShipBtn() {
    var multiShipBtn = document.querySelector('.custom-shipping-checkbox');
    if (multiShipBtn) {
        multiShipBtn.remove();
    }
}

if (window.location.pathname.endsWith('/cart') || window.location.pathname.endsWith('/cart/')) {
    var form = document.getElementById('cart');
    var titleWrapper = document.querySelector('.title-wrapper-with-link');

    if (form) {
        var table = form.querySelector('table.cart-items');
        if (table) {
            addCheckboxAndLabel(titleWrapper);
        } else {
            removeMultiShipBtn();
        }

        // Monitor changes to the cart form
        const observer = new MutationObserver(function(mutationsList) {
            mutationsList.forEach(function(mutation) {
                mutation.removedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && node.classList.contains('cart-items')) {
                        removeMultiShipBtn();
                    }
                });
            });
        });

        observer.observe(form, { childList: true, subtree: true });
    }
}

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        window.location.href = 'apps/myapp';
    }
});

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        setTimeout(() => {
            var drawerHeader = document.querySelector('.drawer__header');
            addCheckboxAndLabel(drawerHeader);
        }, 2000);
    });
});
