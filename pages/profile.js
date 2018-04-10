function init() {
   intialiserProfile(sessionStorage.getItem("profile-id"));
   initialiserFAB();
}
init();


function intialiserProfile(id){

    console.log(id);

    $.ajax({
        type: 'GET',
        cache: false,
        url: baseUrl + '/profile/' + id,
        dataType: 'json',
        headers: {
            'Authorization': sessionStorage.getItem('api-key')
        },
        success: function (data, status, xml) {
            
            // Informations générales
            $("#nom").html(data.prenom +" "+ data.nom);
            $("#promotion").html(data.promotion);
            $("#date_naiss").html(data.date_naiss);
            $("#email").html(data.email);

            let keywords = data.keywords.split(";");
            for(let i in keywords){
                $("#keywords").append("<span class='badge keyword'>"+ keywords[i] +"</span>");
            }
            

            // Photo de profil
            if(data.picture == ""){
                let initiales = getInitiales(data);
                $("#picture").prepend("<span class='card-initiale'>"+ initiales +"</span>");
                $("#picture").css("background-color", getRandomColor());
                $("#picture-image").css("opacity", 0.1);
            }else{
                $("#picture-image").attr("src","images/"+ data.picture);
            }
        }
    });
}

function initialiserFAB(){
    
}

function returnToAnnuaire(){
    initPage("annuaire");
}
