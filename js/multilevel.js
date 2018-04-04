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