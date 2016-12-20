function menuexit() {
    // $(function () {
        $('#pgExit').on("click", function () {
            // alert(window.localStorage.getItem('db_key'));
            alert(window.localStorage.getItem('db_key'));
            navigator.app.exitApp();
            return false;
        });
    // });
}


/*$(document).on("pageinit","#ex01",function(e){*/
$(document).on("pagebeforeshow", "#menu", function (e, ui) {
    document.addEventListener("deviceready", onDeviceReady, false);
});

$(document).on("pageremove", "#menu", function (e) {
    // 12월 20일 크롬 오류로 삭제
    // navigator.app.overrideBackbutton(false);
});

/*
 $(document).on("pagebeforeload",function(e,data){
 alert("132345245245111");
 document.addEventListener("deviceready", onDeviceReady, false);
 });
 */
/*// Wait for device API libraries to load
 //
 function onLoad() {
 document.addEventListener("deviceready", onDeviceReady, false);
 }
 */

// device APIs are available
//
function onDeviceReady() {
    // Register the event listener
    document.addEventListener("backbutton", onBackKeyDown, false);
}

// Handle the back button
//
function onBackKeyDown() {
}