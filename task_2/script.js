const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    console.log('Служит для вывода информации в консоль');
});

document.querySelector('#alert').addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
});

document.querySelector('#prompt').addEventListener('click', () => {
    prompt('Служит для создания диалогового окна с запросом на ввод текста')
});