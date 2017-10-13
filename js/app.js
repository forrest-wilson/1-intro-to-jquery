$(document).ready(function() {

    // DAY 1

    $("#clickableButton").click(function() {
        $("#theId").toggle(500);
    });

    // DAY 2

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
        $(this).css({
            "height": "50%",
            "width": "50%"
        });
    });

    // DAY 3

    // Variable declaration
    var price,
        quantity,
        total;

    // Variable assignment
    price = 5;
    quantity = 14;

    console.log(typeof price);

    // Math
    total = price * quantity;

    // Get element and set the text to "$" plus the total
    var el = document.getElementById("cost");
    el.textContent = "$" + total;

    // Change the variable data type to object for logging
    total = {key: "value"}

    // Logs the data type
    console.log(typeof total);


    // Arrays
    var arrayOfValues = [1, 2, 3, 4, {key: "value"}, [1, 2, 3, 4]];

    console.log(arrayOfValues);

    var cookiesArray = ["doubleChockChip", "whiteMacadamia", "raisin", [2.5, 4.2, 3.5]];

    console.log(cookiesArray[3][0]);
    console.dir(cookiesArray.length);

    var aString = "Hello",
        bString = "world!";

    console.log(aString + " " + bString);
});