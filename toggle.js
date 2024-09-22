document.getElementById('donation').addEventListener('click',function(){
showSectionById('donation1-form');
    })
    document.getElementById('history').addEventListener('click',function(){
    showSectionById('history-form')
        })
document.getElementById('history').addEventListener('click', function(){
const history = document.getElementById('history')
history.classList.remove('bg-gray-300', 'text-black');
history.classList.add('bg-gray-200', 'text-gray-600');
})
