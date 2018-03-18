function initMenu() {
    $("#menu").load("components/menu.html");
    $.getScript("components/menu.js");
}

function initPage(page) {
    $("#container").load("pages/" + page + ".html");
    $.getScript("pages/" + page + ".js");
}

function connect() {
    var data = {};
    data.email = $("#email").val();
    data.password = $("#password").val();
    console.log(data);
    $.post("http://localhost/bastet-slim/v1/login", data, function (data) {

        console.log(data);
        if (data.error) {
            Materialize.toast(data.message, 1000);
        } else {
            sessionStorage.setItem('user', data.name);
            sessionStorage.setItem('api-key', data.apiKey);
            location.reload();
        }
    }, "json");
}

function disconnect() {
    sessionStorage.clear();
    location.reload();
}