"use strict";
// const anchor = document.querySelector('a');
// if (anchor)
//     console.log(anchor.href);
// const anchor = document.querySelector('a')!;//tells that will return always value
// console.log(anchor.href);
const form = document.querySelector('.new-item-form');
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    const invoice = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    console.log(invoice.format());
});
const invoices = [];
const invoice1 = new Invoice('Ahmed', 'personal website', 300);
const invoice2 = new Invoice('Khaled', 'personal website', 350);
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
//classes
