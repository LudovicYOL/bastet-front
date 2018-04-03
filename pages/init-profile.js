
/**
 * Initialisation de la page
 */
function init() {
    genererListePromotion();
    initSelect();
    initDatePicker();
    initChip();
}
init();

/**
 * Génération de la liste des promotions disponibles
 */
function genererListePromotion() {
    let currentYear = (new Date()).getFullYear();
    for (let i = currentYear + 5; i >= 2009; i--) {
        var select = document.getElementById("promotion");
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
}

function initChip() {
    $('.chips-placeholder').material_chip({
        placeholder: 'Entrez un mot clé',
        secondaryPlaceholder: '+Mot clé',
    });
}