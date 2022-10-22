function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const forgotPassword = document.querySelector("#forgotPassword");
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    document.querySelector("#forgotPasswordButton").addEventListener("click", e => {
        e.preventDefault();
        forgotPassword.classList.remove("form--hidden");
        loginForm.classList.add("form--hidden");
    });
    document.querySelector('#linkForgotPassword').addEventListener("click", e => {
        e.preventDefault();
        forgotPassword.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login
        loginfun(e)
    });
    forgotPassword.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login
        forgetPassword(e)
    });
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch create account
        signup(e)
    });
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
function signup(e) {
    e.preventDefault();

    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    var email = document.getElementById('email').value;
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var user = {
        email: email,
        username: username,
        password: password,
    };
    if (password != "" && confirmPassword != "" && email != "" && username != "") {
        if (password == confirmPassword) {
            var LS = JSON.stringify(user);
            localStorage.setItem("user", LS);
            console.log('user added');
            alert("User Added");
            loginForm.classList.remove("form--hidden");
            createAccountForm.classList.add("form--hidden");
        }
    } else {
        setFormMessage(createAccountForm, "error", "Invalid username/password combination");
    }
}
function loginfun(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('Lpassword').value;
    var result = document.getElementById('result');
    var user = localStorage.getItem('user');
    var data = JSON.parse(user);
    console.log(data);
    if (username == 'admin' && password == '123456') {
        alert("Welcome admin ");
        window.location.href = "adminHome.html";
    }
    else if (username == data.username && password == data.password) {
        // result.innerHTML = 'Logged in';
        alert("Logged in successfully");
        window.location.href = "appointment.html";
    }
    else if (username != data.username) {
        result.innerHTML = 'Wrong username';
    }
    else if (password != data.password) {
        result.innerHTML = 'Wrong password';
    }
}
function forgetPassword(e) {
    e.preventDefault();
    var username = document.getElementById('username2').value;
    var email = document.getElementById('email2').value;
    var password = document.getElementById('Fpassword').value;
    var result = document.getElementById('result');
    var user = localStorage.getItem('user');
    var data = JSON.parse(user);
    var user = {
        email: data.email,
        username: data.username,
        password: password,
    };
    var dataToStore = JSON.stringify(user)
    console.log(data);
    if (username == data.username && email == data.email) {
        // result.innerHTML = 'Logged in';
        alert("Password changed");
        localStorage.setItem("user", dataToStore);
        window.location.href = "appointment.html";
    } else if (username != data.username) {
        result.innerHTML = 'Wrong username';
    } else if (email != data.email) {
        result.innerHTML = 'Wrong email';
    }
}