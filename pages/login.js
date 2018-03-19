$( "#login-form" ).submit(function( event ) {
    connect();
    return false;
});

function goToRegister(){
    initPage("register");
}

function goToForgotPassword(){
    initPage("forgot-password");
}