function showSectionById(id){
    document.getElementById('donation1-form').classList.add('hidden');
    document.getElementById('history-form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber =parseFloat(inputValue);
    return inputValueNumber;
}
function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}
function getButtonById(id){
    const button = document.getElementById(id)
    return button;
}