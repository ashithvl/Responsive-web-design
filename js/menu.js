
$(document).ready(function() {
    $('#menu ul li').click(function() {
        $('#menu ul li ul').toggleClass('show');
    });
});


$(document).ready(function() {
    $('.menu-img').click(function() {
        $('#menu ul').toggleClass('show');
    });
});

