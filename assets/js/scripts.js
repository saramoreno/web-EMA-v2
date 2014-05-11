/**
 * ----------------------------------------------------------------------------------------
 * Main JS functionality.
 * ----------------------------------------------------------------------------------------
 */

//menu desplegable

$(function () {
  $(".drop-bar a").on("click", abreMenu);

  function abreMenu() {
    $("#dropdown-menu").slideToggle();
  }
});

//active

$(function () {
  $(".home a").on("click", ponActive);

  function ponActive() {
    $("this").addClass(active);
  }
});