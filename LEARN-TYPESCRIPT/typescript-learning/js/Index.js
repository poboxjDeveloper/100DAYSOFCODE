console.log("this is created with typescript");
function greet(person, date, show) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
    console.log("person type:", typeof person);
    console.log("date type:", typeof date);
    if (show) {
        console.log("show is true");
    }
    console.log("show", show);
}
greet("Greetings to my friend", new Date(), false);
greet("Greetings to Me", new Date(), true);
function calc(x, y) {
    return x * y;
}
console.log("calc(7,7)", calc(7, 7));
function calcObject(o) {
    var result = 1;
    Object.keys(o).map(function (key) {
        console.log("key", key, "value", o[key], typeof o[key]);
        if (typeof o[key] === "number") {
            result = result * o[key];
        }
    });
    return result;
}
console.log(calcObject({ first: 2, second: 2 }));
