function myFunction(){ 
    document.getElementById("demo").innerHTML = "I am currently in my 5th year studying for a Bachelor degree majoring in Business Technology Management at Toronto Metropolitan University.";
}

function DisplayText(){
    let person = prompt("Please enter your name", "Enter name here");
    if (person != null) {
      document.getElementById("name").innerHTML = "Hello " + person + "! Thank you for visiting!";
    }
}

function enlargeImg() {
    img = document.getElementById("img1")
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.25s ease";
}
