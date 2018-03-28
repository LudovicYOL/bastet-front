
function goToRegister(){
    initPage("register");
}

function goToForgotPassword(){
    initPage("forgot-password");
}

$( "#login-form" ).submit(function( event ) {
    connect();
    return false;
});

function connect() {

    var data = {};
    data.email = $("#email").val();
    data.password = $("#password").val();

    $("#email").removeClass("invalid");
    $("#password").removeClass("invalid");

    $.ajax({
        type: 'POST',
        cache: false,
        url: baseUrl +'/login',
        dataType: 'json',
        data: data,
        success: function(data, status, xml){
            console.log(data);
            if (data.error) {
                Materialize.toast(data.message, 1000);
                if(data.field == "password"){
                    $("#password").addClass("invalid");
                }else{
                    $("#email").addClass("invalid");
                }  
            } else {
                sessionStorage.setItem('user', data.name);
                sessionStorage.setItem('role', data.role);
                sessionStorage.setItem('api-key', data.apiKey);
                location.reload();
            }
        },
        error: function(data, status, error){
            Materialize.toast(data.responseJSON.message, 1000);
            $("#email").addClass("invalid");
           // TODO : A GARDER AU CAS OU, on testera avec d'autres navigateurs pour voir l'utilité
           // $("#email").prop("aria-invalid", "true"); 
        },
        complete: function(data, status){
            // A garder en exemple
            // S'éxécute quand le success ou le error a été pris en compte
            // DO NOTHING
        }
    });
       
}
