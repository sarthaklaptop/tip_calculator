let totalBill = document.querySelector('.total-input');
let fivePer = document.querySelector('#p5per');
let tenPer = document.querySelector('#p10per');
let fifteenPer = document.querySelector('#p15per');
let twentifyfiveper = document.querySelector('#p15per');
let fiftyPer = document.querySelector('#p50per');
let custom = document.querySelector('.custom');
let people = document.querySelector('#people')
const tipAmount = document.querySelector('#tip-amount');
// let percent = document.querySelectorAll('.per');
const totalAmount = document.querySelector('#total-amount');
const resetBtn = document.querySelector(".reset-btn");


function five(){
    bill = totalBill.value;
    fivePer = fivePer.value;
    ppl = people.value;
    tip = Math.round((((bill/100)*fivePer)/ppl)*100)/100;
    console.log(tip);
    total = Math.round(((bill/ppl) + (tip))*100)/100;
    console.log(total);
    tipAmount.innerText = `₹${tip}`;
    totalAmount.innerText = `₹${total}`;
}
function ten(){
    bill = totalBill.value;
    tenPer = tenPer.value;
    ppl = people.value;
    tip = Math.round((((bill/100)*tenPer)/ppl)*100)/100;
    console.log(tip);
    total = Math.round(((bill/ppl) + (tip))*100)/100;
    console.log(total);
    tipAmount.innerText = `₹${tip}`;
    totalAmount.innerText = `₹${total}`;
}
function fifteen(){
    bill = totalBill.value;
    fifteenPer = fifteenPer.value;
    ppl = people.value;
    tip = Math.round((((bill/100)*fifteenPer)/ppl)*100)/100;
    console.log(tip);
    total = Math.round(((bill/ppl) + (tip))*100)/100;
    console.log(total);
    tipAmount.innerText = `₹${tip}`;
    totalAmount.innerText = `₹${total}`;
}
function twentify(){
    bill = totalBill.value;
    twentifyfiveper = twentifyfiveper.value;
    ppl = people.value;
    tip = Math.round((((bill/100)*twentifyfiveper)/ppl)*100)/100;
    console.log(tip);
    total = Math.round(((bill/ppl) + (tip))*100)/100;
    console.log(total);
    tipAmount.innerText = `₹${tip}`;
    totalAmount.innerText = `₹${total}`;
}
function fifty(){
    bill = totalBill.value;
    fiftyPer = fiftyPer.value;
    ppl = people.value;
    tip = Math.round((((bill/100)*fiftyPer)/ppl)*100)/100;
    console.log(tip);
    total = Math.round(((bill/ppl) + (tip))*100)/100;
    console.log(total);
    tipAmount.innerText = `₹${tip}`;
    totalAmount.innerText = `₹${total}`;
}

function resetValues(){
    location.reload();
}

// function calculate(){
//     bill = totalBill.value;
//     fivPer = percent.value;
//     console.log(fivPer)
//     ppl = people.value;
//     tip = Math.round((((bill/100)*fivPer)/ppl)*100)/100;
//     console.log(tip);
//     total = (bill/ppl) + (tip)
//     console.log(total);
//     tipAmount.innerText = `$${tip}`;
//     totalAmount.innerText = `$${total}`;
// }