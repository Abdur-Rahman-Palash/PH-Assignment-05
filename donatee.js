let totalAmount = 5500;
let addMoney = 0;
let addMoney1 = 0;
let addMoney2 = 0;

document.getElementById('close-modal').addEventListener('click', function(){
    const amount = getInputValueById('donation-amount1');
const total = getTextValueById('total-amount')
if (!amount) {
    alert("Donation amount empty!");
    return false;
}
    else if (isNaN(amount)) {
        alert('enter a valid donation amount')
        return false;
    }
    else if (amount > total) {
        alert('apni balancer cheye besi tk nite chascen,ata hobe na')
        return false;
    
    }
    else if (amount < 0) {
        alert('insufficient fund')
        return false;
    
    }  
    
totalAmount -=amount;
const remainingAccount =totalAmount
addMoney +=  amount;
const addingMoney =addMoney
document.getElementById('add-money').innerText = addMoney;
document.getElementById('total-amount').innerText = totalAmount;


const p = document.createElement('p');
p.style.backgroundColor = 'white';
p.style.border = '2px solid gray';
p.style.padding = '10px';
p.style.textAlign = 'left';
p.innerText = `${addingMoney} Taka is Donated for famine-2024, Bangladesh. current balance ${remainingAccount} Taka `;
const transactionContainer =document.getElementById('history-form');
transactionContainer.appendChild(p);
return true;
    
})

document.getElementById('close-modal1').addEventListener('click', function(){
    const amount2 = getInputValueById('donation-amount2');
let total1 = getTextValueById('total-amount')
if (!amount2) {
    alert("Donation amount empty!");
    return false;
}
else if (isNaN(amount2)) {
    alert('enter a valid donation amount')
    return false;
}
else if (amount2 > total1) {
    alert('apni balancer cheye besi tk nite chascen,ata hobe na')
    return false;

}
else if (amount2 < 0) {
    alert('insufficient fund')
    return false;

} 
totalAmount -=amount2;
const remainingAccount2 =totalAmount;
addMoney1 +=  amount2;
const addingMoney2 =addMoney1;
document.getElementById('add-money2').innerText = addMoney1;
document.getElementById('total-amount').innerText = totalAmount;



const p = document.createElement('p');
p.style.backgroundColor = 'white';
p.style.border = '2px solid gray';
p.style.padding = '10px';
p.style.textAlign = 'left';
p.innerText = `${addingMoney2}  Taka is Donated for Flood Relief,Bangladesh.current balance ${remainingAccount2} Taka `;
const transactionContainer =document.getElementById('history-form');
transactionContainer.appendChild(p);
return true;

})

document.getElementById('close-modal2').addEventListener('click', function(){
    const amount3 = getInputValueById('donation-amount3');
let total2 = getTextValueById('total-amount')
if (!amount3) {
    alert("Donation amount empty!");
    return false;
}
else if (isNaN(amount3)) {
    alert('enter a valid donation amount')
    return false;
}
else if (amount3 > total2) {
    alert('apni balancer cheye besi tk nite chascen,ata hobe na')
    return false;

}
else if (amount3 < 0) {
    alert('insufficient fund')
    return false;

}  
totalAmount -=amount3;
const remainingAccount3 =totalAmount;
addMoney2 +=  amount3;
const addingMoney3 =addMoney2;
document.getElementById('add-money3').innerText = addMoney2;
document.getElementById('total-amount').innerText = totalAmount;


const p = document.createElement('p');
p.style.backgroundColor = 'white';
p.style.border = '2px solid gray';
p.style.padding = '10px';
p.style.textAlign = 'left';
p.innerText = `${addingMoney3}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh. current balance ${remainingAccount3} Taka `;
const transactionContainer =document.getElementById('history-form');
transactionContainer.appendChild(p);
return true; 
})