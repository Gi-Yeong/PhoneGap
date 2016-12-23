$(document).on("mobileinit", function () {
    $.mobile.defaultPageTransition = "slide";
    //$.mobile.loading( 'show', { text: "", textonly: false});
    //$.mobile.loadingMessage="hello";
    console.log("mobileinit");

    /* 김대필 html에서 사용하는 것들 */
    $(document).on("pageinit", "#dataBaseJob", function (e, ui) {
        startLocalDB(function (retMsg) {
            if (retMsg != true) {
                alert("<연락바랍니다!...>");
            }
        });
    });


    // 처음 또는 거래명세표 작업에서 나올때는 배열값을 초기화 해준다.
    $(document).on("pageinit", "#jobMenu", function (e, ui) {
        menuexit();
        myVm70Array = [];
        myVm70Index = 0;

        myJobCheck = "go";  // 작업메뉴화면에 언제오던..
    });

    $(document).on("pageinit", "#jobVm70", function (e, ui) {
        jobVM_btn01_new();
        //alert("myVm70Array.length: " + myVm70Array.length);

        // 맨처음이 아닐수도 있지만 레코드가 없으면 무조건 처음으로 간주한다.
        // 시간도 걸리지 않겠지...
        if (myVm70Array.length <= 0) {
            startLocalDB(function (retMsg) {
                if (retMsg == true) {
                    selectVm70All("A", function (retMsg) {
                        if (retMsg == true) {
                            myJobCheck == "no";
                            refreshVm70();
                        } else {
                            alert("연락바랍니다!..");
                        }
                        ;
                    });
                } else {
                    alert("<연락바랍니다!..>");
                }
            });
        } else {
            //
            // 레코드 메모리 배열에 갯수가 있으면 다시 뿌려주기만 한다.
            refreshVm70();
        }
    });

    $(document).on("pageinit", "#jobVm70Ipkeum", function (e, ui) {
        startJobVm70Ipkeum();
    });

    $(document).on("pageinit", "#jobVm70Del", function (e, ui) {
        startJobVm70Del();
    });
    /* 김대필 html에서 사용하는 것들 */

    // 김기영 JS
    // 김기영 JS

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