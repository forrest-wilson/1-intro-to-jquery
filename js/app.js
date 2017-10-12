$(document).ready(function() {
    $("#clickableButton").click(function() {
        $("#theId").toggle(500);
    });

    $("#box1 button").click(function() {
        $("#box1").css({
            "background-color": "red"
        });
    });

    $("#box2 button").click(function() {
        $("#box2").toggleClass("add-border");
    });

    $("#box3 button").click(function() {
        $("#box3").innerHeight(500);
    });

    $("#box4 button").hover(function() {
        $(this).css({
            "height": "100%",
            "width": "100%",
            "transform": "none",
            "left": "0",
            "top": "0"
        });
    }, function() {
        alert("WHAT'S GOING ON!");
    });
});