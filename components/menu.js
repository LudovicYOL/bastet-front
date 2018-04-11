
$(".button-collapse").sideNav();

$(document).on("click", "a.menu-item", function (data) {
    let href = $(this).get(0).dataset.href;

    // Traitement avant redirection
    if(href == "profile") sessionStorage.setItem("profile-id",  sessionStorage.getItem("user-id"));

    // Navigation vers page
    initPage(href);
    $('.button-collapse').sideNav('hide');
});