var div = document.createElement('div');
div.style.padding = '10px 15px 10px 15px';
div.style.backgroundColor = '#8521ff';
div.classList.add('custom-shipping-checkbox');
div.style.position = 'relative';
div.style.width = 'fit-content';
div.style.borderRadius = '3px';
div.style.marginBottom = '10px';

var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'ship-to-multiple-addresses';
checkbox.style.marginRight = '10px';
// Create a new label element
var label = document.createElement('label');
label.htmlFor = 'ship-to-multiple-addresses';
label.innerText = 'Ship to Multiple Addresses';
label.style.color = 'white';
//const cart_drawer = document.querySelector('.drawer.animate.active');

const cart_button = document.getElementById("cart-icon-bubble");
cart_button.addEventListener("click", function() {
    var drawer_header = document.querySelector('.drawer__header');
      if(drawer_header){
          div.appendChild(checkbox);
          div.appendChild(label);
          drawer_header.insertAdjacentElement('afterend', div);
      }
});

if (window.location.pathname.endsWith('/cart') || window.location.pathname.endsWith('/cart/')) {
        var titleWrapper = document.querySelector('.title-wrapper-with-link');
        if (titleWrapper) {
            div.appendChild(checkbox);
            div.appendChild(label);
            titleWrapper.insertAdjacentElement('afterend', div);
        }
}
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        window.location.href = 'apps/myapp';
    }
});

const buttons = document.querySelectorAll('button');

function delayedTask(clickedButton) {
  var drawer_header = document.querySelector('.drawer__header');
      if(drawer_header){
          div.appendChild(checkbox);
          div.appendChild(label);
          drawer_header.insertAdjacentElement('afterend', div);
      }
}

for (const button of buttons) {
  button.addEventListener('click', function() {
    anyButtonClicked = true;
    setTimeout(() => {
      delayedTask(this); 
    }, 2000);
  });
}
