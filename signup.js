function signup(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
        return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var user = {
        username: username,
        password: password
    };

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    alert('Inscription réussie !');

    document.getElementById('signupForm').reset();
}
