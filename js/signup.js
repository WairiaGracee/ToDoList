document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const signupMessage = document.getElementById('signupMessage');

    // Simulate saving user data (in real-world applications, save to the database via an API)
    if (newUsername && newPassword) {
        // Save the user credentials in localStorage (not secure, for demo purposes only)
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);

        // Show a success message and redirect to login page
        signupMessage.textContent = 'Sign-Up Successful! Redirecting to Login...';
        signupMessage.style.color = 'green';

        setTimeout(() => {
            window.location.href = 'login.html'; // Redirect to login page
        }, 2000);
    } else {
        signupMessage.textContent = 'Please fill out all fields.';
        signupMessage.style.color = 'red';
    }
});
