const logDetails = (uid:string,item:string)=>{
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`)
}
const greetAgain = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`)
}

//type alias

type StringOrNumber = string | number;

const greetMore = (user: { name: string, uid: StringOrNumber }) => {
    console.log(`${user.name} says hello`)
}

type User = { name: string, uid: StringOrNumber };

const greetMoreAndMore = (user: User) => {
    console.log(`${user.name} says hello`)
}