document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create a mailto link
    const mailtoLink = `mailto:mutwiriephraim3@gmail.com?subject=Contact Form Submission&body=Email: ${email}%0A%0AMessage: ${message}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;

    //reset form
    document.getElementById('contactForm').reset();

});
