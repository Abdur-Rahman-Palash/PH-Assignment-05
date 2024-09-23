const donation = getButtonById('donation');
const history = getButtonById('history');
document.getElementById('donation').addEventListener('click',function(){
    history.style.backgroundColor = '#B4F461';
    donation.style.backgroundColor = '';
    
        })
        document.getElementById('history').addEventListener('click',function(){
    donation.style.backgroundColor = '#B4F461';
    history.style.backgroundColor = '';
            })