
function init() {
    recherche("");
}
init();

/**
 * Initialisation de l'annuaire
 */
function recherche(keyword) {

    $("#annuaire").html("");

    $.ajax({
        type: 'GET',
        cache: false,
        url: baseUrl + '/profiles/' + keyword,
        dataType: 'json',
        headers: {
            'Authorization': sessionStorage.getItem('api-key')
        },
        success: function (data, status, xml) {
            console.log(data);
            if (data.error) {
                Materialize.toast(data.responseJSON.message, 1000);
            } else {
                for (let key in data.profiles) {
                    let profile = data.profiles[key];

                    console.log(profile);

                    let template = "<div id='profile-" + profile.id + "' data-id='" + profile.id + "' class='profile col s12 m6 l3'>";
                    template += "<div class='card'>";
                    template += "<div class='card-image waves-effect waves-block waves-light' style=\"background-image:url('./images/yol_ludovic.jpg');\">";
                    template += "<img class='activator'>";
                    template += "</div>";
                    template += "<div class='card-content'>";
                    template += "<span class='card-title activator grey-text text-darken-4'>" + profile.prenom + " " + profile.nom + "";
                    template += "<i class='material-icons right'>more_vert</i>";
                    template += "</span>";
                    template += "<p class='card-promotion'>Promotion " + profile.promotion + "</p>";
                    template += "</div>";
                    template += "<div class='card-reveal'>";
                    template += "<span class='card-title grey-text text-darken-4'>Mots clés";
                    template += "<i class='material-icons right'>close</i>";
                    template += "</span>";
                    template += "<p>";

                    for (let key in profile.keywords.split(';')) {
                        let keyword = profile.keywords.split(';')[key];
                        if (keyword != "") template += "<span class='badge keyword'>" + keyword + "</span>";
                    }
                    template += "</p>";
                    template += "</div>";
                    template += "</div>";
                    template += "</div >";

                    $("#annuaire").append(template);
                }
            }

            // activer le click pour ouvrir le profil
            $(".card-image").on('click', function () {
                let profile = $(this).closest(".profile");
                console.log("ouverture profil : " + profile.attr("data-id"));
            });
        }
    });
}

// GESTION RECHERCHE

$("#search-btn > a > i").on('click', function () {
    setTimeout(function () {
        $('#search-input').focus();
    }, 500);
});

var typingTimer; //timer identifier
var doneTypingInterval = 500;  //time in ms, 5 second for example

//on keyup, start the countdown
$('#search-input').on('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$('#search-input').on('keydown', function () {
    console.log("test");
    clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping() {
    recherche($('#search-input').val());
}
