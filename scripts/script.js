// Define header elements
const header = document.getElementById('nav');
const mainTitle = document.querySelector('h1');

// Change navbar on scroll
window.onscroll = function() {
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        header.classList.add('scrolled');
        mainTitle.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        mainTitle.classList.remove('scrolled');
    }
}

// json inladen

Array.prototype.slice.call(document.querySelectorAll('.person')).map(person => {
    person.addEventListener('click', event => {
        console.log(event.target.parentElement.id)
        // zoeken in json met behulp van het id
    })
})
