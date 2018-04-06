var submenu = document.querySelector(".multilevel-nav ul.multilevel");
submenu.parentElement.querySelector('a').addEventListener("click", function (e) {
    e.preventDefault();
    var class_list = submenu.classList;
    class_list.forEach(element => {
        if (element == "toggle-on") {
            submenu.classList.remove("toggle-on");
        } else {
            submenu.classList.add("toggle-on");
        }
    });
});

(function ($) {
    var sidebar  = $('.sidebar');
    var content  = $('.content');
    $('a.sidebar-left-toggle').click((e) => {
        e.preventDefault();
        content.removeClass('no-sidebar');
        if (!sidebar.hasClass('sidebar-left')) {
            sidebar.addClass('sidebar-left');
        } 
    });
    $('a.sidebar-right-toggle').click((e) => {
        e.preventDefault();
        content.removeClass('no-sidebar');
        if (sidebar.hasClass('sidebar-left')) {
            sidebar.removeClass('sidebar-left');
        } 
    });
    $('a.no-sidebar-toggle').click((e) => {
        e.preventDefault();
        if (content.hasClass("no-sidebar")) {
            content.removeClass('no-sidebar');
        } else {
            content.addClass('no-sidebar');
        }

    });

    $('a.hide-sidebar-toggle').click((e) => {
        e.preventDefault();
        if (sidebar.hasClass("hide")) {
            sidebar.removeClass('hide');
        } else {
            sidebar.addClass('hide');
        }

    });
})(jQuery);