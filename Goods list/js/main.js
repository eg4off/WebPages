var phones = document.getElementById("phones");
var tabs = document.getElementById("tabs");
var watches = document.getElementById("watch");
var acces = document.getElementById("acces");
var other = document.getElementById("other");

$('#phones').on('click', () => {
    $('.item').addClass('hide');
    $('.phone').removeClass('hide');
});
$('#tabs').on('click', () => {
    $('.item').addClass('hide');
    $('.tab').removeClass('hide');
});
$('#watches').on('click', () => {
    $('.item').addClass('hide');
    $('.watch').removeClass('hide');
});
$('#acces').on('click', () => {
    $('.item').addClass('hide');
    $('.case').removeClass('hide');
    $('.glass').removeClass('hide');
});
$('#other').on('click', () => {
    $('.item').addClass('hide');
    $('.dex').removeClass('hide');
    $('.oculus').removeClass('hide');
});