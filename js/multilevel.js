var submenu = document.querySelector(".multilevel-nav ul.multilevel");
submenu.parentElement.addEventListener("click", function(e) {
    e.preventDefault();
    var class_list = submenu.classList;
    class_list.forEach(element => {
        if (element == "hidden") {
            submenu.classList.remove("hidden");
        } else {
            submenu.classList.add("hidden");
        }
    });
});