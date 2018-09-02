 function showMenu() {
    var element = document.getElementById("nav-menu");
    if (element.className === "menu__itens") {
        element.className += " responsive";
    } else {
        element.className = "menu__itens";
    }
}