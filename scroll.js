
$(document).ready(function () {
    setInterval(function () {
        $('#carousel').animate({
            scrollLeft: $('#carousel').scrollLeft() + 500
        }, 1000);
    }, 3000);
});

