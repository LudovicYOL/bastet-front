
$(".button-collapse").sideNav();

$(document).on("click", "a.menu-item", function (data) {
    let href = $(this).get(0).dataset.href;
    initPage(href);
    $('.button-collapse').sideNav('hide');
});