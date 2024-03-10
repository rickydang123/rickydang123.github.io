function storeData(event) {
    event.preventDefault(); // prevent the form from submitting normally

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const subject = document.getElementById("subject").value;

    if (fname === "" || lname === "" || email === "" || country === "" || subject === "") {
        alert("Please fill out all required fields.");
        return false;
      }

    // Store form data in local storage
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email",email);
    localStorage.setItem("country", country);
    localStorage.setItem("subject", subject);
    }