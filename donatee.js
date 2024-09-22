document.getElementById('donate-now1').addEventListener('click', function(event){
    event.preventDefault();
const donationAmount1 = getInputValueById('donation-amount1');
    if(donationAmount1 === 123){
        const totalBalance = getTextValueById('total-amount');
        const totalAmountRemaining = totalBalance - donationAmount1;
        document.getElementById('total-amount').innerText = totalAmountRemaining;
    }
if(isNaN(donationAmount1) && totalBalance < donationAmount1){
    alert('Failed transaction and insufficient fund')
    return;
}
})