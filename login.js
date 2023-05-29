function login(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var user = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        alert('Connexion réussie !');
    } else {
        alert('Identifiants invalides. Veuillez réessayer.');
    }

    document.getElementById('loginForm').reset();
}
