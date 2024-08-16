var currentUrl = window.location.href;

// Check if the URL contains '/checkouts/'
if (currentUrl.includes('/checkouts/')) {
     var listItems = document.querySelectorAll('li');
    console.log("Checkout Page");

    // Loop through each <li> element
    listItems.forEach(function(li) {
        // Check if the <li> contains a <span> with 'a:' in its text
        var span = li.querySelector('span');
        if (span && span.textContent.includes('a:')) {
            // Remove the <li> element from the DOM
            li.remove();
        }
    });
}else{
    console.log("not a checkout page");
}
