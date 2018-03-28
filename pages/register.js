
function init(){
    $('select').material_select();
    $("select[required]").css({position: 'absolute', display: 'inline', height: 0, padding: 0, width: 0});
}
init();

function verifierMatchPassword(){
    $("#password-confirm").removeClass("invalid").remove("valid");
    if ($("#password-first").val() != $("#password-confirm").val()) {
        $("#password-confirm").addClass("invalid");
        return false;
    }
    return true;
}
$("#password-first").on("focusout", function (e) {
    verifierMatchPassword();
});

$("#password-confirm").on("keyup", function (e) {
    verifierMatchPassword();
});

$("#password-confirm").on("focusin", function (e) {
    verifierMatchPassword();
});

$("#password-confirm").on("focusout", function (e) {
    verifierMatchPassword();
    return false;
});

$( "#register-form" ).submit(function( event ) {
    register();
    return false;
});

function register() {

    // Validation
    if($("#role").val() == null){
        Materialize.toast("Veuillez sélectionner un rôle", 1000);
        $("#role").addClass("invalid");
        return;
    }
    if(!verifierMatchPassword() || $("#password-confirm").val() == "" || $("#password-first").val() == ""){
        Materialize.toast("Mot de passe invalide", 1000);
        return;
    }

    // Construction objet
    var role = $("#role").val();
    var data = {};
    data.email = $("#email").val();
    data.password = $("#password-first").val();
    data.role = role;

    
    // Appel serveur
    console.log("appel serveur");
    $.ajax({
        type: 'POST',
        cache: false,
        url: baseUrl +'/register',
        dataType: 'json',
        data: data,
        success: function(data, status, xml){
            console.log(data);
            if (data.error) {
                Materialize.toast(data.message, 1000);
            } else {
                Materialize.toast("Vous êtes inscrit avec succès !", 1000);
                if(role == "ECOLE")
                {
                    initPage("wait-for-validation");
                }
                else
                {
                    initPage("create-account");
                }
            }
        },
        error: function(data, status, error){
            Materialize.toast(data.responseJSON.message, 1000);
        }
    });
}