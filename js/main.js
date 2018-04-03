
// Variable de configuration

// Constantes URL de base pour l'API
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

function initSelect() {
    $('select').material_select();
    $("select[required]").css({ position: 'absolute', display: 'inline', height: 0, padding: 0, width: 0 });
}

function initDatePicker() {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false, // Close upon selecting a date,
        format: 'dd/mm/yyyy'
    });
}