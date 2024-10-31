let firstNameInput= document.getElementById("first-name-input");
let firstNameError= document.getElementById("first-name-error");
let emptyFirstNameError= document.getElementById("empty-first-name");

let lastNameInput= document.getElementById("last-name-input");
let lastNameError= document.getElementById("last-name-error");
let emptyLastNameError= document.getElementById("empty-last-name");

let usernameInput= document.getElementById("username-input");
let usernameError= document.getElementById("username-error");
let emptyUsernameError= document.getElementById("empty-Username-name");

let emailInput= document.getElementById("email-input");
let emailError= document.getElementById("email-error");
let emptyEmailError= document.getElementById("empty-Email");

let passwordInput= document.getElementById("password");
let passwordError= document.getElementById("password-error");
let emptyPasswordError= document.getElementById("empty-password");

let konfirmasiPasswordInput= document.getElementById("konfirmasi-password");
let konfirmasiPasswordError= document.getElementById("konfirmasi-password-error");
let emptyKonfirmasiPasswordError= document.getElementById("empty-konfrimasi-password");

let nomorTeleponInput= document.getElementById("nomor-telepon-input");
let nomorTeleponError= document.getElementById("nomor-telepon-error");
let emptyNomorTeleponError= document.getElementById("empty-nomor-telepon");

let jenisKelaminInput= document.getElementById("jenis-kelamin-input");
let jenisKelaminError= document.getElementById("jenis-kelamin-error");
let emptyJenisKelaminError= document.getElementById("empty-jenis-kelamin");

let urlWebsiteInput= document.getElementById("url-website-input");
let urlWebsiteError= document.getElementById("url-website-error");
let emptyUrlWebsiteError= document.getElementById("empty-url-website");

let submitButton= document.getElementById("submit-button");

let validClasses= document.getElementById("valid");

let invalidClasses= document.getElementById("error");

function validateInput(input, emptyError, formatError, condition) {
    if (input.value.trim() === "") {
        emptyError.classList.remove("hide");
        formatError.classList.add("hide");
        input.classList.add("error");
    } else if (!condition(input.value)) {
        formatError.classList.remove("hide");
        emptyError.classList.add("hide");
        input.classList.add("error");
    } else {
        formatError.classList.add("hide");
        emptyError.classList.add("hide");
        input.classList.remove("error");
    }
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    validateInput(firstNameInput, emptyFirstNameError, firstNameError, value => /^[a-zA-Z]+$/.test(value));
    validateInput(lastNameInput, emptyLastNameError, lastNameError, value => /^[a-zA-Z]+$/.test(value));
    validateInput(usernameInput, emptyUsernameError, usernameError, value => /^[a-zA-Z0-9]+$/.test(value));
    validateInput(emailInput, emptyEmailError, emailError, value => /^\S+@\S+\.\S+$/.test(value));
    validateInput(passwordInput, emptyPasswordError, passwordError, value => value.length >= 8);
    validateInput(phoneInput, emptyPhoneError, phoneError, value => /^\d{12}$/.test(value));

    if (verifyPasswordInput.value !== passwordInput.value) {
        verifyPasswordError.classList.remove("hide");
        emptyVerifyPasswordError.classList.add("hide");
        verifyPasswordInput.classList.add("error");
    } else {
        verifyPasswordError.classList.add("hide");
        emptyVerifyPasswordError.classList.add("hide");
        verifyPasswordInput.classList.remove("error");
    }

    if (
        firstNameInput.value.trim() !== "" && /^[a-zA-Z]+$/.test(firstNameInput.value) &&
        lastNameInput.value.trim() !== "" && /^[a-zA-Z]+$/.test(lastNameInput.value) &&
        usernameInput.value.trim() !== "" && /^[a-zA-Z0-9]+$/.test(usernameInput.value) &&
        emailInput.value.trim() !== "" && /^\S+@\S+\.\S+$/.test(emailInput.value) &&
        passwordInput.value.trim() !== "" && passwordInput.value.length >= 8 &&
        phoneInput.value.trim() !== "" && /^\d{12}$/.test(phoneInput.value) &&
        verifyPasswordInput.value === passwordInput.value
    ) {
        alert("Pendaftaran berhasil!");
        // Form dapat disubmit, atau bisa tambahkan submit form secara otomatis di sini
    }
});