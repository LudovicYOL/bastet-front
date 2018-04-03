
function init() {
    initAnnuaire();
}
init();

/**
 * Initialisation de l'annuaire
 */
function initAnnuaire() {
    for (let i = 10; i > 0; i--) {
        let template = "<div class='col s12 m6 l3'>";
        template += "<div class='card'>";
        template += "<div class='card-image waves-effect waves-block waves-light' style=\"background-image:url('./images/yol_ludovic.jpg');\">";
        template += "<img class='activator'>";
        template += "</div>";
        template += "<div class='card-content'>";
        template += "<span class='card-title activator grey-text text-darken-4'>Ludovic YOL";
        template += "<i class='material-icons right'>more_vert</i>";
        template += "</span>";
        template += "<p>Promotion 2016</p>";
        template += "</div>";
        template += "<div class='card-reveal'>";
        template += "<span class='card-title grey-text text-darken-4'>Mots clés";
        template += "<i class='material-icons right'>close</i>";
        template += "</span>";
        template += "<p><span class='badge keyword'>test</span><span class='badge keyword'>test2</span></p>";
        template += "</div>";
        template += "</div>";
        template += "</div >";

        $("#annuaire").append(template);
    }
}