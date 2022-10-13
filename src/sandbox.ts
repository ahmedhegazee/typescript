let fn: Function;

fn = () => 'test';
console.log(fn)
//c? is optional
const add =(a:number,b:number,c:number|string=10)=>{
    console.log(a + b);
}

add(10, 5);

const minus = (a: number, b: number):number => {
    return a - b;
}

let result = minus(10, 5);

// result="dasdsad"//error