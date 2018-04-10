function init() {
    $('.modal').modal();
}
init();

function updatePhoto() {
    $('#updatePhotoModal').modal('open');
}

function validate() {
    Materialize.toast("Enregistrement en cours...", 1000);
    // TODO : remplacer par appel à modifier profil 
    setTimeout(() => {
        Materialize.toast("Profil enregistré !", 1000);
    }, 1200);
}