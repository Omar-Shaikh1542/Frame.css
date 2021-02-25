var menu_btn = document.getElementById("menu-btn");
var sidebar = document.getElementById("sidebar");
var dropBtn = document.querySelector("#dropdown-button");
var dropMenu = document.querySelector("#dropdown-menu")
var right_sidebar = document.getElementById("right-sidebar");
var searchIO = document.querySelector("#searchIO");
var searchBtn = document.querySelector("#searchBtn"); 


menu_btn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    right_sidebar.classList.toggle("active")
})

dropBtn.onclick = function(){
    dropMenu.classList.toggle("active");
}


searchBtn.onclick = function(){
    searchIO.classList.toggle("active");
}