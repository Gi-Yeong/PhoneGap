/*------->데이타베이스 관련 변수들<---------------------------------------*/
var databaseName        = "invoDB.db";
var databaseVersion     = "1.0";
var databaseDisplayName = "invoceDB";
var databaseSize        = 2 * 1024 * 1024;   // 얼마까지?????????? 가능...
var myDB                = "";

/*-----> 명세표발행작업시 사용하는 것들 <-----------------------------------*/
var myVm70Array  = new Array();  // 명세표마스타
var myVm70Index  = -1;           // 현재 가르키고 있는 인덱스
var myVm70LastNo = 0;            // 일짜당 마지막 번호..
/*var jm40Array = new Array();   // 거래처마스타
 var jm20Array = new Array();  // 상품마스타
 var jm71Array = new Array();  // 명세표현황화일*/
/*---------------------------------------------------------------------*/


//$(document).ready(function()... 이것이 onBodyLoad 보다 빠르게 실행되므로, onBodyLoad()로 실행한다.
//$(document).ready(function(){
function onBodyLoad() {

    /*alert("onBodyLoad-->Start...");
     document.addEventListener("deviceready", onDeviceReady, false);

     // 이곳은 onDeviceReady()이 함수 실행후에 작업되는 곳이다.. 순서상 중요함!...
     alert("onBodyLoad-->end3333");*/


    $("#btnLogin").click(function(){
        ajaxLogin();
        return false;
    });

    $(".lnk").click(function(){
        var url=$(this).attr("href");
        $.mobile.changePage(url,{
            transition:"slide",
            reverse:true
        });
    });
}

/*function onDeviceReady() {

 };*/