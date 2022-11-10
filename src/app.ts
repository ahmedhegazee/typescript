// const anchor = document.querySelector('a');

// if (anchor)
//     console.log(anchor.href);
// const anchor = document.querySelector('a')!;//tells that will return always value

// console.log(anchor.href);

const form = document.querySelector('.new-item-form')! as HTMLFormElement;

const type = document.querySelector("#type")! as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom")! as HTMLInputElement;
const details = document.querySelector("#details")! as HTMLInputElement;
const amount = document.querySelector("#amount")! as HTMLInputElement;
//access modifiers => public , private readonly
class Invoice {
    //  client: string;
    // details: string;
    // amount: number;
    // constructor(client: string, details: string, amount: number) {
    //     this.client = client;
    //     this.details = details;
    //     this.amount = amount;
    // }
    constructor(public client:string,private details:string,private amount:number){}
    format():string {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
form.addEventListener('submit', (e:Event) => { 
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
   
    const invoice = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    console.log(invoice.format());
});

const invoices: Invoice[] = [];
const invoice1 = new Invoice('Ahmed','personal website',300);
const invoice2 = new Invoice('Khaled','personal website',350);
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
console.log(invoice1.client);
//classes

