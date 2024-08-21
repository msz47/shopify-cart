var checkboxContainer = document.createElement("div");
checkboxContainer.id = "multishiContainer1";  // Set the container ID
checkboxContainer.style.width = "65%";
checkboxContainer.style.display = "flex";
checkboxContainer.style.alignItems = "center";
checkboxContainer.style.flexWrap = "wrap";
checkboxContainer.style.flexDirection = "row";
checkboxContainer.style.alignContent = "flex-end";
checkboxContainer.style.justifyContent = "flex-end";
checkboxContainer.style.marginBottom = "8px";

var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "multishipBtn";
checkbox.style.marginRight = "10px";
checkbox.style.width = "15px";
checkbox.style.height = "15px";


var checkboxLabel = document.createElement("label");
checkboxLabel.htmlFor = "multishipBtn";
checkboxLabel.innerText = "Ship to multiple-destination addresses.";
checkboxLabel.style.fontWeight = "bold"
function hideProductOptions() {
    var productOptions = document.querySelectorAll('.product-option');
    var keywords = ['SequenceID:', 'parent_Order:', 'Address:'];
    productOptions.forEach(function(option) {
        var dtElement = option.querySelector('dt');

        if (dtElement) {
            var dtText = dtElement.textContent.trim(); 
            if (keywords.includes(dtText)) {
                option.style.display = 'none';
            }
        }
    });
}
function addCheckboxAndLabel(parentElement) {
    if (parentElement && !document.getElementById('multishiContainer1')) {
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(checkboxLabel);
        parentElement.insertAdjacentElement('beforeBegin', checkboxContainer);
    }
}

function removeMultiShipBtn() {
    var multiShipBtn = document.getElementById('multishiContainer1');
    if (multiShipBtn) {
        multiShipBtn.remove();
    }
}

if (window.location.pathname.endsWith('/cart') || window.location.pathname.endsWith('/cart/')) {
    var form = document.getElementById('cart');
    var titleWrapper = document.querySelector('.title-wrapper-with-link');
    var checkoutButton = document.querySelector(".cart__blocks")
    hideProductOptions();

    if (form) {
        var table = form.querySelector('table.cart-items');
        if (table) {
            addCheckboxAndLabel(checkoutButton);
        } else {
            removeMultiShipBtn();
        }

        // Monitor changes to the cart form
        const observer = new MutationObserver(function(mutationsList) {
            mutationsList.forEach(function(mutation) {
                mutation.removedNodes.forEach(function(node) {
                  var table = document.getElementsByClassName("cart-items")
                    if (node.nodeType === 1 && node.classList.contains('cart-items')) {
                        hideProductOptions();
                    }
                    if (node.nodeType === 1 && node.classList.contains('cart-items') && table.length == 0) {
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
