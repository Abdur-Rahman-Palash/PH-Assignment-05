let totalAmount = 5500;
let addMoney = 0;
let addMoney1 = 0;
let addMoney2 = 0;

document.getElementById('close-modal').addEventListener('click', function(){
    const amount = getInputValueById('donation-amount1');
let total = getTextValueById('total-amount')
totalAmount -=amount;
addMoney +=  amount;
document.getElementById('add-money').innerText = addMoney;
document.getElementById('total-amount').innerText = totalAmount;


const p = document.createElement('p');
p.style.backgroundColor = 'white';
p.style.border = '2px solid gray';
p.style.padding = '10px';
p.style.textAlign = 'center';
p.style.width = '700px';
p.style.marginTop = '30px';
p.style.marginLeft = '300px'
p.innerText = `${amount} Taka is Donated for famine-2024 at Feni, Bangladesh `;
const transactionContainer =document.getElementById('history-form');
transactionContainer.appendChild(p);

    if (isNaN(amount)) {
        alert('Please enter a valid donation amount')
        return;
    
    } 
    if (amount > total) {
        alert('apni balancer cheye besi tk nite chascen,ata hobe na')
        return;
    
    } 
    if (amount < 0) {
        alert('insufficient fund')
        return;
    
    }  
})

document.getElementById('close-modal1').addEventListener('click', function(){
    const amount2 = getInputValueById('donation-amount2');
let total1 = getTextValueById('total-amount')
totalAmount -=amount2;
addMoney1 +=  amount2;
document.getElementById('add-money2').innerText = addMoney1;
document.getElementById('total-amount').innerText = totalAmount;



const p = document.createElement('p');
p.style.backgroundColor = 'white';
p.style.border = '2px solid gray';
p.style.padding = '10px';
p.style.textAlign = 'center';
p.style.width = '700px';
p.style.marginTop = '30px';
p.style.marginLeft = '300px'
p.innerText = `${amount2}  Taka is Donated for Flood Relief in Feni,Bangladesh `;
const transactionContainer =document.getElementById('history-form');
transactionContainer.appendChild(p);

    if (isNaN(amount2)) {
        alert('Please enter a valid donation amount')
        return;
    
    } 
    if (amount2 > total1) {
        alert('apni balancer cheye besi tk nite chascen,ata hobe na')
        return;
    
    } 
    if (amount2 < 0) {
        alert('insufficient fund')
        return;
    
    }  
})

document.getElementById('close-modal2').addEventListener('click', function(){
    const amount3 = getInputValueById('donation-amount3');
let total2 = getTextValueById('total-amount')
totalAmount -=amount3;
addMoney2 +=  amount3;
document.getElementById('add-money3').innerText = addMoney2;
document.getElementById('total-amount').innerText = totalAmount;


const p = document.createElement('p');
p.style.backgroundColor = 'white';
p.style.border = '2px solid gray';
p.style.padding = '10px';
p.style.textAlign = 'center';
p.style.width = '700px';
p.style.marginTop = '30px';
p.style.marginLeft = '300px'
p.innerText = `${amount3}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh `;
const transactionContainer =document.getElementById('history-form');
transactionContainer.appendChild(p);

    if (isNaN(amount3)) {
        alert('Please enter a valid donation amount')
        return;
    
    } 
    if (amount3 > total2) {
        alert('apni balancer cheye besi tk nite chascen,ata hobe na')
        return;
    
    } 
    if (amount3 < 0) {
        alert('insufficient fund')
        return;
    
    }  
})