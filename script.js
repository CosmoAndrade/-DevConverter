const form = document.getAnimations('form');


const inputValue = document.getElementById('value-real');
const selectCurrency = document.getElementById('currency');
const result = document.getElementById('result');

form.addEventListener('submit',handleSubmit);


function handleSubmit(e){
    e.preventDefault();

    if(!inputValue.value || inputValue.value < 0){
        alert("Informe um valor correto!");
        return;
    }else if (!selectCurrency.value){
        alert("Escolha uma moeda!")
    }
}