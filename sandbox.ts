let names = ['Ali', 'Ahmed', 'Khaled'];
names.push('Salem');

// names.push(3);//error push the same type in the array
let numbers = [10, 45, 60];
numbers.push(234);

let mixed = ['fjjfjf', 10, true];
mixed.push(89);

//type of initialized values in the array , it will be the value pushed to array

let ninja = {
    name: 'Test',
    age: 34,
    belt:"black"
}

//type of properties cannot be changed later

// ninja.age = "dds";//error
// ninja.skills = ['sadasd','sada'];//cannot add additional property

ninja = {
    name: 'adas',
    age: 0,
    belt:"white"
}
//redeclare object must follow the same structure in the first initialize;