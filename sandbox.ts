//we can define type of variable then init it
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 20;

// age = "dada";//error

let ninjas: string[] =[];

// ninjas = ["adas",'das'];
ninjas.push("Ali");

//union types

let mixed: (string | boolean | number)[] = [];
mixed.push("Test");
mixed.push(30);
mixed.push(false);
console.log(mixed);

let uid: string | number;

let ninjaOne: object;
ninjaOne = {
    name: "Test",
    age:12,
}

ninjaOne = {
    something:"",
}

// ninjaOne.prop1 = "";//error
let ninjaTwo: {
    name: string,
    age: number,
    belt:string,
}

ninjaTwo = {
    name: "",
    age: 24,
    belt:""
};


enum Direction {
    Up=1,
    Down,
    Right,
    Left   
}

let obj: {
    direction :Direction
}

obj = {
    direction:Direction.Down,
}