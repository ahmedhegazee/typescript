//we can define type of variable then init it
var character;
var age;
var isLoggedIn;
age = 20;
// age = "dada";//error
var ninjas = [];
// ninjas = ["adas",'das'];
ninjas.push("Ali");
//union types
var mixed = [];
mixed.push("Test");
mixed.push(30);
mixed.push(false);
console.log(mixed);
var uid;
var ninjaOne;
ninjaOne = {
    name: "Test",
    age: 12
};
ninjaOne = {
    something: ""
};
// ninjaOne.prop1 = "";//error
var ninjaTwo;
ninjaTwo = {
    name: "",
    age: 24,
    belt: ""
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["Left"] = 4] = "Left";
})(Direction || (Direction = {}));
var obj;
obj = {
    direction: Direction.Down
};
