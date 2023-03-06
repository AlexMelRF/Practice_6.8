const textIn = document.querySelector('input');
const textDublicate = document.querySelector('#dublicateField');

textIn.addEventListener('keypress', (event) => {
    textDublicate.textContent = textIn.value;
})

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(textIn.value);
    textIn.value = '';
    textDublicate.textContent = '';
})