function myFunction(){ 
    document.getElementById("demo").innerHTML = "I am currently in my 5th year studying for a Bachelor degree majoring in Business Technology Management at Toronto Metropolitan University.";
}

function DisplayText(){
    let person = prompt("Please enter your name", "Enter name here");
    if (person != null) {
      document.getElementById("name").innerHTML = "Thank you for visiting " + person + ", hope you enjoyed your stay!";
    }
}

function enlargeImg() {
    img = document.getElementById("img1")
    img.style.transform = "scale(1.35)";
    img.style.transition = "transform 0.25s ease";
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Change button image based on mode
    const button = document.querySelector('.toggle-btn');
    const currentMode = body.classList.contains('dark-mode') ? 'image/lightmode.png' : 'image/darkmode.png';
    button.innerHTML = `<img src="${currentMode}" alt="Dark Mode" width="84" height="48">`;
  }

// Get the button
    var mybutton = document.getElementById("scrollBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }