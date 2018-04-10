
$(".button-collapse").sideNav();

$(document).on("click", "a.menu-item", function (data) {
    let href = $(this).get(0).dataset.href;

    // Traitement avant redirection
    // TODO : revoir redirection mon profil
    console.log(sessionStorage.getItem('user-id'));
    if(href == "profile") sessionStorage.setItem("profile-id", sessionStorage.getItem("user-id"));
    console.log(sessionStorage.getItem("profile-id"));

    // Navigation vers page
    initPage(href);
    $('.button-collapse').sideNav('hide');
});