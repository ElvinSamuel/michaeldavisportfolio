var prev = 0;
var nav = $('#sideNavigation');

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

$(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;

    // Display the sidenav after we've passed the initial page.
    if (scrollTop > 500) {
        nav.show(500);
    } else {
        nav.hide(500);
    }
});