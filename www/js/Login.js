function buttonLogin() {
    var rdata = $('#form1').serialize();
    $.ajax({
//                url    : 'http://192.168.0.29:8080/guest/login',
//                url    : 'http://203.236.209.200:8080/login/memberlogin',
        url          : 'http://192.168.0.29:8080/login/memberlogin',
        type         : 'post',
        dataType     : "jsonp",
        jsonp        : "callback",
        jsonpCallback: "my",
        data         : rdata,
        success      : function (data) {
            if (data == 'fail') {
                $('#pw').val('');
                $('#id').val('');
                $('#id').focus();
                return false;
            } else {
                var alist = data.result_list;
                /*  alert(alist);*/
                for (var i = 0; i < alist.length; i++) {
                    window.localStorage.setItem("db_key", alist[i].db_key_from_Oracle);
                }//for
                $.mobile.changePage("menu.html", {transition: "flip"});
                return false;
            }
        },
        error        : function (request, status, error) {
            alert('code:' + request.status + '\n' + 'message:' + request.responseText + '\n' + 'error' + error);
        }
    });
}