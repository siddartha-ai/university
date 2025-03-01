document.addEventListener("DOMContentLoaded", function () {
    function validateForm(nameId, emailId, messageId, nameErrorId, emailErrorId, messageErrorId) {
        let name = document.getElementById(nameId).value.trim();
        let email = document.getElementById(emailId).value.trim();
        let message = document.getElementById(messageId).value.trim();

        let nameError = document.getElementById(nameErrorId);
        let emailError = document.getElementById(emailErrorId);
        let messageError = document.getElementById(messageErrorId);

        // Clear previous errors
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isValid = true;

        if (name === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (message.length < 5) {
            messageError.textContent = "Message must be at least 5 characters long.";
            isValid = false;
        }

        return isValid;
    }

    // Contact Form Validation
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (validateForm("name", "email", "message", "nameError", "emailError", "messageError")) {
                alert("Contact form submitted successfully!");
                contactForm.reset();
            }
        });
    }

    // Blog Form Validation
    let blogForm = document.querySelector(".comment-form");
    if (blogForm) {
        blogForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (validateForm("blogName", "blogEmail", "blogMessage", "blogNameError", "blogEmailError", "blogMessageError")) {
                alert("Blog form submitted successfully!");
                blogForm.reset();
            }
        });
    }
});
