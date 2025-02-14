


firebase.auth().onAuthStateChanged(user => {
    if (user) {
       
        window.location.href = "ambiente.html";
    }
})



function irparaoutrapagina(){
    showLoading();
  firebase.auth().signInWithEmailAndPassword(form.email().value,form.password().value).then(() =>{
    hideLoading();
    window.location.href = "ambiente.html";
  }).catch(error => {
    hideLoading();
alert(getErrorMessage(error));
  });    
    
}
function getErrorMessage(error){
    if(error.code == "auth/user-not-found"){
        return "USUÁRIO NÃO ENCONTRADO";
    } if (error.code == "auth/wrong-password") {
        return "Senha inválida";
    }
    return error.message;
}

function registrar(){
    window.location.href = "registro.html";
}
function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
} 

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    return form.password().value ? true : false;
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
} 
   
function recoverPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();  
        alert('Email enviado comm sucesso');
    }).catch(error =>{ 
        hideLoading();
    alert(getErrorMessage(error));
});
}
    



