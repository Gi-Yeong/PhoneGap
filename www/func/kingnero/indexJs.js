function ajaxLogin() {
    var rdata = $('#form1').serialize();
    $.ajax({
        // url    : 'http://192.168.0.29:8080/guest/login',
        // url          : 'http://203.236.209.200:8080/login/memberlogin',
        // url          : 'http://192.168.0.29:8080/login/memberlogin',
        url          : 'http://203.236.209.200:8080/inp/login/memberlogin',
        type         : 'post',
        dataType     : "jsonp",
        jsonp        : "callback",
        jsonpCallback: "my",
        data         : rdata,
        success      : function (data) {
            var alist = data.result_list;
            alert(alist.length);
            for (var i = 0; i < alist.length; i++) {
                // 현재는 키가 하나임
                var db_check = alist[i].db_key_from_Oracle;
            }//for
            if (db_check == null) {
                $('#pw').val('');
                $('#id').val('');
                $('#id').focus();
                return false; // return false를 해줘야 focus가 정상적으로 작동한다
            } else {
                /*  alert(alist);*/
                // for (var i = 0; i < alist.length; i++) {
                // 현재는 키가 하나임
                window.localStorage.setItem("db_key", db_check);
                // window.localStorage.setItem("db_key", alist[i].db_key_from_Oracle);
                // }//for
                $.mobile.changePage("jobMenu.html", {transition: "flip"});
                return false;
            }
        },
        error        : function (request, status, error) {
            alert('code:' + request.status + '\n' + 'message:' + request.responseText + '\n' + 'error' + error);
        }
    });
}