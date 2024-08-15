function checkAndCallFunction() {
    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the URL contains '/checkouts/'
    if (currentUrl.includes('/checkouts/')) {
        // Call the function if the condition is met
        removeLiWithSpanA();
    }
}

// Example function to be called if the URL contains '/checkouts/'
function removeLiWithSpanA() {
    // Select all <li> elements
    var listItems = document.querySelectorAll('li');

    // Loop through each <li> element
    listItems.forEach(function(li) {
        // Check if the <li> contains a <span> with 'a:' in its text
        var span = li.querySelector('span');
        if (span && span.textContent.includes('a:')) {
            // Remove the <li> element from the DOM
            li.remove();
        }
    });
}

// Call the checkAndCallFunction on page load
checkAndCallFunction();
