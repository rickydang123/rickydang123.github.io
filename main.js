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