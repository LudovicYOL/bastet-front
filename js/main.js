
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

function getRandomColor(){
    var colors = [
        "#b71c1c",
        "#880e4f",
        "#4a148c",
        "#311b92",
        "#1a237e",
        "#0d47a1",
        "#01579b",
        "#006064",
        "#004d40",
        "#1b5e20",
        "#33691e",
        "#827717",
        "#f57f17",
        "#ff6f00",
        "#e65100",
        "#bf360c",
        "#3e2723",
        "#212121",
        "#263238"
    ];
    return colors[getRandomInt(colors.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getInitiales(profile){
    return profile.prenom.charAt(0) + profile.nom.charAt(0);
}