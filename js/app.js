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

    // String concatenation
    var aString = "Hello",
        bString = "world!",
        c = 'I\m ',
        d = 'Forrest!',
        e = c + d;

    console.log(aString + " " + bString + " " + e);

    // Logical operators
    console.log(10 + 5);
    console.log(10 - 5);
    console.log(10 / 5);
    console.log(10 % 3);

    // String concatenation Exercise
    var a, b, c, d;

    a = '"It is not the strongest of its species,';
    b = ' nor the most intelligent,';
    c = ' but the one most responsive to change."';
    d = a + b + c;

    console.log(d);

    // Objects
    console.log(window);

    // person object
    var person = {
        firstName: "Forrest",
        lastName: "Wilson-Jennings",
        age: 21,
        location: "Paraparaumu",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        },
        description: function() {
            return "Hello! My name is "
                    + this.fullName()
                    + ". I am "
                    + this.age
                    + " years old and live in "
                    + this.location
                    + ".";
        },
        box: {
            height: "200px",
            width: "200px",
            color: "blue"
        }
    }

    // Add css to the #objectDiv
    $("#objectDiv").css({
        "width": person.box.width,
        "height": person.box.height,
        "background-color": person.box.color
    });

    // Print the description() method of person
    document.getElementById("personDescription").textContent = person.description();

    // Adds the nationality property to the person object
    person.nationality = "Kiwi";

    console.log(person.nationality);
    console.log(person);

    // Deletes the nationality property from the person object
    // delete person.nationality;

    // Fruits array
    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    // Adds a new item to the END of fruits array
    fruits.push("Kiwi");

    console.log(fruits);

    // Adds a new element to the START of fruits array
    fruits.unshift("Passionfruit");

    console.log(fruits);

    // Removes the last item in the array by default.
    // Use [i] to pop at a defined index
    fruits.pop();

    console.log(fruits);

    // Functions

    // Function declaration
    function log(message) {
        console.log(message);
    }

    log("Hello World!");

    // Function expression
    var area = function(l, w) {
        return l * w;
    }

    console.log(area(50, 10));
});