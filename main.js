let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
var setting = document.querySelector(".setting");
var filemanager = document.querySelector(".filemanager");
var subitem = document.querySelector(".subitem");
var subfile = document.querySelector(".subfile");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    subfile.classList.add("visible");
    menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
    // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
}

setting.addEventListener("click", function () {
    subitem.classList.toggle("hidden");
});

filemanager.addEventListener("click", function () {
    subfile.classList.toggle("visible");

    var chevronIcon = filemanager.querySelector(".chevron i");

    if (chevronIcon.classList.contains("bxs-chevron-down")) {
        chevronIcon.classList.remove("bxs-chevron-down");
        chevronIcon.classList.add("bxs-chevron-up");
    } else {
        chevronIcon.classList.remove("bxs-chevron-up");
        chevronIcon.classList.add("bxs-chevron-down");
    }

    if (sidebar.classList.contains("open")) {
        return;
    } else {
        sidebar.classList.toggle("open");
    }
});
