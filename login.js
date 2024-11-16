document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Clear any previous error message
    errorMessage.textContent = '';

    // Retrieve stored credentials (from localStorage)
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Replace with the actual dashboard URL
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
