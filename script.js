document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameInput = document.getElementById('name');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const nameError = document.getElementById('nameError');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = validateForm();
        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    usernameInput.addEventListener('input', function() {
        validateUsername();
    });

    emailInput.addEventListener('input', function() {
        validateEmail();
    });

    passwordInput.addEventListener('input', function() {
        validatePassword();
    });

    nameInput.addEventListener('input', function() {
        validateName();
    });

    function validateForm() {
        let valid = true;
        if (!validateUsername()) valid = false;
        if (!validateEmail()) valid = false;
        if (!validatePassword()) valid = false;
        if (!validateName()) valid = false;
        return valid;
    }

    function validateUsername() {
        const username = usernameInput.value;
        if (username.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters long.';
            return false;
        } else {
            usernameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.value;
        if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }

    function validateName() {
        const name = nameInput.value.trim();
        if (name === '') {
            nameError.textContent = 'Name cannot be empty.';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }
});
