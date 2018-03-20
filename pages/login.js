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

function connect() {
    
    var data = {};
    data.email = $("#email").val();
    data.password = $("#password").val();

    $.ajax({
        type: 'POST',
        cache: false,
        url: baseUrl +'/login',
        dataType: 'json',
        data:data,
        success: function(data, status, xml){
            if (data.error) {
                Materialize.toast(data.message, 1000);
                $("#check_email").addClass("invalid");
                $("#check_email").prop("aria-invalid", "true");
            } else {
                sessionStorage.setItem('user', data.name);
                sessionStorage.setItem('api-key', data.apiKey);
                location.reload();
            }
        },
        error: function(data, status, error){
            Materialize.toast(data.responseJSON.message, 1000);
        },
        complete: function(data, status){
            // DO NOTHING
        }
    });
       
}
