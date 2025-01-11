
function myFunction(){alert("sign in or lig in");}
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Make an API call to register the user (you'll need to implement this endpoint)
    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful! Please check your email to confirm your account.');
        } else {
            alert('Registration failed: ' + data.message);
        }
    });
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Make an API call to log in the user
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('register-section').style.display = 'none';
            document.getElementById('profile-section').style.display = 'block';
        } else {
            alert('Login failed: ' + data.message);
        }
    });
});

document.getElementById('logout').addEventListener('click', function () {
    // Make an API call to log out the user
    fetch('/api/logout', {
        method: 'POST'
    })
    .then(response => {
        if (response.ok) {
            location.reload(); // Refresh the page to show login/register form
        }
    });
});

document.getElementById('delete-account').addEventListener('click', function () {
    // Make an API call to delete the user's account
    fetch('/api/delete-account', {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Account deleted successfully.');
            location.reload();
        }
    });
});
