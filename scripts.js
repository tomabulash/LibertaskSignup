const fullname = document.getElementById("full-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const terms = document.getElementById("terms");
const submit = document.getElementById("submit");
const emailNotes = document.getElementById("email-notes");
const passwordNotes = document.getElementById("password-notes");
const termsNotes = document.getElementById("terms-notes");
const form = document.querySelector("form");

email.addEventListener("focusout", () => {
    if(email.validity.typeMismatch) {
        emailNotes.className = "error";
        emailNotes.textContent = "⚠ Email address is invalid.";
    } else {
        emailNotes.className = "required";
        emailNotes.textContent = "Required";
    }
});

password.addEventListener("focusout", () => {
    //when both fields have text
    if(password.value.length != 0 && confirmPassword.value.length != 0) {
        if(password.value != confirmPassword.value && password.validity.patternMismatch) {
            passwordNotes.className = "error";
            passwordNotes.innerHTML = "⚠ Passwords do not match.";
            passwordNotes.innerHTML += "<br />⚠ Passwords must be 8-16 characters long, with at least one lowercase and uppercase letter, and one special character.";
        } else if(password.value != confirmPassword.value && !password.validity.patternMismatch) {
            passwordNotes.className = "error";
            passwordNotes.innerHTML = "⚠ Passwords do not match.";
        } else if(password.value == confirmPassword.value && password.validity.patternMismatch) {
            passwordNotes.className = "error";
            passwordNotes.innerHTML = "⚠ Passwords must be 8-16 characters long, with at least one lowercase and uppercase letter, and one special character.";
        } else if(password.value == confirmPassword.value && !password.validity.patternMismatch) {
            passwordNotes.className = "required";
            passwordNotes.innerHTML = "Required";
        }
    } else if(password.value.length != 0 && confirmPassword.value.length == 0) {
        if(password.validity.patternMismatch) {
            passwordNotes.className = "error";
            passwordNotes.innerHTML = "⚠ Passwords must be 8-16 characters long, with at least one lowercase and uppercase letter, and one special character.";
        } else if(!password.validity.patternMismatch) {
            passwordNotes.className = "required";
            passwordNotes.innerHTML = "Required";
        }
    }
});

confirmPassword.addEventListener("focusout", () => {
    if(password.value.length != 0 && confirmPassword.value.length != 0) {
        if(password.value != confirmPassword.value && confirmPassword.validity.patternMismatch) {
            passwordNotes.className = "error";
            passwordNotes.innerHTML = "⚠ Passwords do not match.";
            passwordNotes.innerHTML += "<br />⚠ Passwords must be 8-16 characters long, with at least one lowercase and uppercase letter, and one special character.";
        } else if(password.value != confirmPassword.value && !confirmPassword.validity.patternMismatch) {
            passwordNotes.className = "error";
            passwordNotes.innerHTML = "⚠ Passwords do not match.";
        } else if(password.value == confirmPassword.value && confirmPassword.validity.patternMismatch) {
            passwordNotes.className = "error";
            passwordNotes.innerHTML = "⚠ Passwords must be 8-16 characters long, with at least one lowercase and uppercase letter, and one special character.";
        } else if(password.value == confirmPassword.value && !confirmPassword.validity.patternMismatch) {
            passwordNotes.className = "required";
            passwordNotes.innerHTML = "Required";
        }
    } else if(password.value.length == 0 && confirmPassword.value.length != 0) {
        if(confirmPassword.validity.patternMismatch) {
            passwordNotes.className = "error";
            passwordNotes.innerHTML = "⚠ Passwords must be 8-16 characters long, with at least one lowercase and uppercase letter, and one special character.";
        } else if(!confirmPassword.validity.patternMismatch) {
            passwordNotes.className = "required";
            passwordNotes.innerHTML = "Required";
        }
    }
});

terms.addEventListener("click", () => {
    if(terms.checked) {
    termsNotes.className = "required";
    termsNotes.innerHTML = "Required";
    } else {
    termsNotes.className = "error";
    termsNotes.innerHTML = "⚠ you must agree before you sign up.";
    }
}); 

 
form.addEventListener("submit", (e) => {
    
    if(!email.validity.valid || !password.validity.valid || !confirmPassword.validity.valid || !terms.checked) {
        
        e.preventDefault();

        //validness check:

        if(!terms.checked) {
        termsNotes.className = "error";
        termsNotes.innerHTML = "⚠ you must agree before you sign up.";
        }

        if(!email.validity.valid) {
            emailNotes.className = "error";
            emailNotes.textContent = "⚠ Email address is invalid.";            
        }

        if(password.value.length != 0 && confirmPassword.value.length != 0) {
            if(password.value != confirmPassword.value && (confirmPassword.validity.patternMismatch || password.validity.patternMismatch)) {
                passwordNotes.className = "error";
                passwordNotes.innerHTML = "⚠ Passwords do not match.";
                passwordNotes.innerHTML += "<br />⚠ Passwords must be 8-16 characters long, with at least one lowercase and uppercase letter, and one special character.";
            } else if(password.value != confirmPassword.value && !confirmPassword.validity.patternMismatch && !password.validity.patternMismatch) {
                passwordNotes.className = "error";
                passwordNotes.innerHTML = "⚠ Passwords do not match.";
            } else if(password.value == confirmPassword.value && (confirmPassword.validity.patternMismatch || password.validity.patternMismatch)) {
                passwordNotes.className = "error";
                passwordNotes.innerHTML = "⚠ Passwords must be 8-16 characters long, with at least one lowercase and uppercase letter, and one special character.";
            } 
        } 

        //emptiness check:

        if(email.value.length == 0) {
            emailNotes.className = "error";
            emailNotes.textContent = "⚠ Email address is required."; 
        }

        if(password.value.length == 0 && confirmPassword.value.length == 0) {
            passwordNotes.className = "error";
            passwordNotes.innerHTML = "⚠ Password is required.";
        }

        if(password.value.length == 0 && confirmPassword.value.length != 0) {
            passwordNotes.className = "error";
            passwordNotes.innerHTML = "⚠ please confirm the password.";
        }

    }
});

