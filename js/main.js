document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // 1. Capture form data
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            };

            // 2. Send data to backend
            fetch('http://localhost:8080/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // 3. Handle success
                    console.log('Success:', data);
                    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
                    contactForm.reset(); // Clear the form
                })
                .catch((error) => {
                    // 4. Handle error
                    console.error('Error:', error);
                    alert('Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
                });
        });
    }



});
