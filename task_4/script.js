const testTextLink = document.querySelector('.testLink');
testTextLink.addEventListener('click', function(event) {
    event.preventDefault();
    this.textContent = prompt('Print some text, press Enter and take a look at the link');
    })
