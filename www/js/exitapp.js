function menuexit() {
    $(function () {
        $('#pgExit').on("click", function () {
            // alert(window.localStorage.getItem('db_key'));
            alert(window.localStorage.getItem('db_key'));
            navigator.app.exitApp();
            return false;
        });
    });
}