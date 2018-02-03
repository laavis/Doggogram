$("#feature-container > div:gt(0)").hide();

setInterval(function() {
    $("#feature-container > div:first")
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo("#feature-container");
}, 3000);