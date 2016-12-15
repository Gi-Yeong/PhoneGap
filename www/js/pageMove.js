$(document).ready(function () {
    $('#p1').on('swipeleft', function (e) {
        $.mobile.changePage('#p2', {transition: 'slide'});
    });

    $('#p2').on('swiperight', function (e) {
        $.mobile.changePage('#p1', {transition: 'slide', reverse: true});
    });

    $('#p2').on('swipeleft', function (e) {
        $.mobile.changePage('#p3', {transition: 'slide'});
    });
    $('#p3').on('swiperight', function (e) {
        $.mobile.changePage('#p2', {transition: 'slide', reverse: true});
    });

    $('#p3').on('swipeleft', function (e) {
        $.mobile.changePage('#p4', {transition: 'slide'});
    });
    $('#p4').on('swiperight', function (e) {
        $.mobile.changePage('#p3', {transition: 'slide', reverse: true});
    });

    $('#p4').on('swipeleft', function (e) {
        $.mobile.changePage('#p1', {transition: 'slide'});
    });
    $('#p1').on('swiperight', function (e) {
        $.mobile.changePage('#p4', {transition: 'slide', reverse: true});
    });
});
