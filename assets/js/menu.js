$(document).ready(function () {
    $(".menuhamburguer").click(function () {
        $(this).toggleClass("active");
        $(".header__menu").toggleClass("active");
    });
});