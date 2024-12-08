// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamiskt år i footern
const yearSpan = document.querySelector('#current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactform");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        if (validateForm()) {
            const confirmation = document.getElementById("formConfirmation");
            confirmation.textContent = "Thank you! Your message has been sent.";
            confirmation.style.display = "block";
            confirmation.classList.add("success");

            form.reset();
        }
    });
});

function validateForm() {
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name field cannot be empty.";
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Message field cannot be empty.";
        isValid = false;
    }

    return isValid;
}


