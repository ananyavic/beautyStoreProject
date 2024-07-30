function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset error messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Validate username
    if (username === '') {
        document.getElementById('username-error').textContent = 'Username is required.';
        return false;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        return false;
    }

    // Validate password
    if (password.length < 8) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters long.';
        return false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
        return false;
    }

    // If validation passes, submit the form
    alert('Form submitted successfully!');
}

// Password strength indicator
function updatePasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('strength-indicator');
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const strengthColors = ['gray', 'red', 'orange', 'blue', 'green'];

    strengthIndicator.textContent = `Strength: ${strengthLabels[strength - 1] || 'Very Weak'}`;
    strengthIndicator.style.color = strengthColors[strength - 1] || 'gray';
}

// Attach event listeners
document.querySelector('form').addEventListener('submit', validateForm);
document.getElementById('password').addEventListener('input', updatePasswordStrength);

