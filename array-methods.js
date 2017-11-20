(function() {
    //
    // indexOf() Array Method
    //

    var arr = ["Fish", "Tigers", "Sheep", "Tigers", "Horses"],
        found = false;

    for (var i= 0, l = arr.length; i< l; i++){
        if (arr[i] === 'Tigers') {
            found = true;
            console.log('run!');
        }
    }

    // By utilzing -1 in the indexOf syntax we can scan the array
    // and return a true result
    var sayWhat = arr.indexOf("Tigers") != -1;
    console.log(sayWhat);

    //Another pattern is using only the value of the item itself
    console.log(arr.indexOf("Tigers", 2));

    //
    // Filtering methods
    //

    // Filtering data without the filter method
    var arr = [
        {"name":"Bk's", "count": 2},
        {"name":"Macca's", "count": 5},
        {"name":"Pizza Hutt", "count": 3},
        {"name":"Fruit and Veges", "count": 16}
    ];

    // Notice the empty array push pattern. Very common and
    // useful for pushing and filtering a new set of data. 
    var newArr = [];

    for (var i = 0, l = arr.length; i < l; i++){
        if (arr[i].name === "Fruit and Veges") {
            newArr.push(arr[i]);
        }
    }

    console.log("Filter results:", newArr);

    //Here we use the filter method
    var arr = [
        {"name":"rabbits", "count": 11},
        {"name":"cats", "count": 2},
        {"name":"dogs", "count": 5},
        {"name":"rabbits", "count": 35},
        {"name":"parrots", "count": 3},
        {"name":"rabbits", "count": 2},
        {"name":"rabbits", "count": 4}
    ];
        
    var newArr = arr.filter(function(item) {
        return item.name === "rabbits";
    });
    
    // so the variable newArr contains an updated filtered array of data
    console.log("Filter results:", newArr);

    //
    // forEach() Method
    //

    var arr = [1,2,3,4,5,6,7,8];
    
    // Uses the usual "for" loop to iterate
    for(var i= 0, l = arr.length; i< l; i++){
        console.log(arr[i]);
    }

    //Uses forEach to iterate
    arr.forEach(function(item,index){
        console.log(item);
    });
})();