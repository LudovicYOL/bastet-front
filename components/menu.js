
    $(".button-collapse").sideNav();

    $(document).on("click","a.menu-item",function(data){
        let href= $(this).get(0).dataset.href;
        initPage(href);
        $('.button-collapse').sideNav('hide');
    });

    function initPage(page){
        $("#container").load("pages/"+ page +".html");
        $.getScript("pages/"+ page +".js");
    }

    function loadContent(){

    }