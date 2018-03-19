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

    $.ajax({
        type: 'POST',
        cache: false,
        url: 'http://localhost/bastet-slim/v1/login',
        dataType: 'json',
        data:data,
        success: function(data, status, xml){
            if (data.error) {
                Materialize.toast(data.message, 1000);
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

function disconnect() {
    sessionStorage.clear();
    location.reload();
}