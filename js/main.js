
// Variable de configuration
const baseUrl = "http://localhost/bastet-slim/v1";

function initMenu() {
    $("#menu").load("components/menu.html");
    $.getScript("components/menu.js");
}

function initPage(page) {
    $("#container").load("pages/" + page + ".html");
    $.getScript("pages/" + page + ".js");
}

function disconnect() {
    sessionStorage.clear();
    location.reload();
}