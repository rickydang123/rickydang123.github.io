// Scroll to the top of the page
function scrollToTop() {
    document.documentElement.style.scrollBehavior = 'auto';

    smoothScrollToTop(500);

    setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, 1000);
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

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.topnav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the fixed header
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight, // Adjust scroll position by subtracting header height
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
// Function to add floating animation to elements when they enter the viewport
function addFloatInAnimation() {
    const floatInSectionElements = document.querySelectorAll('.float-in-section');
  
    function checkFloatIn() {
      floatInSectionElements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('is-visible');
        }
      });
    }
  
    window.addEventListener('scroll', checkFloatIn);
    window.addEventListener('resize', checkFloatIn);
  }
  
  // Call the function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    addFloatInAnimation();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var homeSection = document.getElementById('home');
    homeSection.classList.remove('hidden'); // Remove the 'hidden' class to make the section visible
  });
  