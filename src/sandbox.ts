// let greet: Function;

let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, c: string) => number;
calc = (numberOne: number, numberTwo: number, action: string) => {
    if (action == "add")
        return numberOne + numberTwo;
    return numberOne + numberTwo;
    
}

type User = { name: string, age: number };

let logDetails: (obj: User) => void;
logDetails = (human: User)=>{
    console.log(`${human.name} is ${human.age}`);
}