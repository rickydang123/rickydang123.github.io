// Function to smoothly scroll to the top of the page
function scrollToTop() {
    // Scroll to the top of the document over 500 milliseconds
    smoothScrollToTop(500);
}

// Function to smoothly scroll to the top of the page over a specified duration
function smoothScrollToTop(duration) {
    // Start position of the scroll
    var start = window.pageYOffset;
    // Distance to scroll
    var distance = -start;
    // Start time of the scroll
    var startTime = null;

    // Animation function
    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        // Calculate the next position using easing function (optional, you can use linear if you want constant speed)
        var scrollY = easeInOutQuad(timeElapsed, start, distance, duration);
        // Scroll to the next position
        window.scrollTo(0, scrollY);
        // Continue the animation until duration is reached
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    // Easing function (optional, you can use linear if you want constant speed)
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    // Request animation frame to start the animation
    requestAnimationFrame(animation);
}

// Function to update the button visibility and add/remove 'visible' class
function updateScrollButton() {
    var scrollBtn = document.getElementById("scrollBtn");
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Determine if the button should be visible
    var shouldBeVisible = scrollTop > 20;

    // Add or remove the 'visible' class based on the scroll position
    if (shouldBeVisible) {
        scrollBtn.classList.add("visible");
    } else {
        scrollBtn.classList.remove("visible");
    }
}

// Add event listener for scroll events
window.addEventListener("scroll", updateScrollButton);
