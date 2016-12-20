$(document).on("mobileinit", function () {
    $.mobile.defaultPageTransition = "slide";
    //$.mobile.loading( 'show', { text: "", textonly: false});
    //$.mobile.loadingMessage="hello";
    console.log("mobileinit");


    /*  $(document).on( "pageload",function(e,data){
     console.log("pageload");
     console.log(data.url);
     console.log("-----------------");
     });*/

    // 김기영 JS
    $(document).on("pageshow", "#menu", function (e, ui) {
       menuexit();
    });


    $(document).on("pageshow", "#mysql01", function (e, ui) {
        alert("pageshow");
        mysqlget();

    });
    $(document).on("pagehide", "#mysql01", function (e, ui) {
        console.log("mysql01 pagehide");
        $("#test_table2").empty();

    });
    $(document).on("pageshow", "#oracle01", function (e, ui) {
        console.log("oracle01 pageshow");
        listget();

    });
    $(document).on("pagehide", "#oracle01", function (e, ui) {
        console.log("oracle01 pagehide");
        $("#test_table").empty();
    });

});