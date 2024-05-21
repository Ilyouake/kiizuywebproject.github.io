$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();

        let username = $('#username').val();
        let lastName = $('#surname').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let agreement = $('#remember-me').prop('checked');

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;

        function showError(elementId, message) {
            $('#' + elementId).text(message).css('color', 'red');
        }

        function clearError(elementId) {
            $('#' + elementId).text('').css('color', 'red');
        }

        if (username.match(usernameRegex) && lastName !== '' && email.match(emailRegex) && password.length >= 8 && agreement) {
            let newUser = {
                firstName: username,
                lastName: lastName,
                email: email,
                password: password
            };

            let users = JSON.parse(localStorage.getItem('users')) || [];

            let existingUser = users.find(user => user.email === newUser.email);

            if (existingUser) {
                showError('email-error', 'User with this email already exists.');
            } else {
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                window.location.href = '../login/index.html';
            }
        }
    });
});