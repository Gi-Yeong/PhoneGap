function jobVM_btn01_new() {
    hideall();

    $('#footer_new').on('taphold', function () {
        hideall();
        $('#footer-msg_new').slideToggle(200);
    });

    $('#btnDelForm').on('taphold', function () {
        hideall();
        $('#footer-msg_del').slideToggle(200);
    });

    $('#footer_edit').on('taphold', function () {
        hideall();
        $('#footer-msg_edit').slideToggle(200);
    });

    $('#footer_sum').on('taphold', function () {
        hideall();
        $('#footer-msg_sum').slideToggle(200);
    });

    $('#footer_select').on('taphold', function () {
        hideall();
        $('#footer-msg_sel').slideToggle(200);
    });
}

function hideall() {
    $('#footer-msg_new').hide();
    $('#footer-msg_del').hide();
    $('#footer-msg_edit').hide();
    $('#footer-msg_sum').hide();
    $('#footer-msg_sel').hide();
}
// $(function () {
//     $('.success').on('click', function () {
//         $.mobile.changePage('ex02.html', {transition: 'slide'});
//     });
//     $('.success').on('taphold', function () {
//         $('.message_for_user').slideDown(200);
//     });
//     $('.footer_new').on('taphold', function () {
//         // $('.footer_new').on('click', function () {
//         $('.footer-msg').slideToggle(200);
//     })
// });
//
// $(document).ready(function () {
// // hide the menu when the page load
//     $("#navigation-list").hide();
//     $('.message_for_user').hide();
//     $('.footer-msg').hide();
// // when .menuBtn is clicked, do this
//     $(".menuBtn").on("click", function () {
//         // open the menu with slide effect
//         $("#navigation-list").slideToggle(300);
//     });
// });