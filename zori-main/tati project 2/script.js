let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", showSlides);
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulating form submission success
        document.getElementById('form-response').innerHTML = `Thank you, ${name}! Your message has been sent successfully.`;
        document.getElementById('form-response').style.display = 'block';
        
        // Clear form fields after submission
        document.getElementById('contactForm').reset();
        
        // In a real-world application, you'd send this data to a server (using an API or email service)
    } else {
        document.getElementById('form-response').innerHTML = 'Please fill out all the fields.';
        document.getElementById('form-response').style.display = 'block';
        document.getElementById('form-response').style.color = 'red';
    }
}
