let text = "Ahmed";
let age = 24;


// age = "fff"; type of variable cannot be changed
//typescript is for checking types during development not in the run time
const circle = ( diameter:number):number => {
    return diameter * Math.PI
};

console.log(circle(7.5));