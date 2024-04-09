function storeData(event) {
    event.preventDefault(); // prevent the form from submitting normally

    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (fname === "" || email === "" || subject === "" || message === "") {
        alert("Please fill out all required fields.");
        return false;
      }

    // Store form data in local storage
    localStorage.setItem("fname", fname);
    localStorage.setItem("email",email);
    localStorage.setItem("subject", subject);
    localStorage.setItem("message", message);

    alert("Submission Successful")
    }

    