// Define header elements
const header = document.getElementById('nav');
const mainTitle = document.querySelector('h1');
const hvaLogo = document.querySelector('#hva-logo');

// Change navbar on scroll
window.onscroll = function() {
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        header.classList.add('scrolled');
        mainTitle.classList.add('scrolled');
        hvaLogo.classList.add('scrolled');

    } else {
        header.classList.remove('scrolled');
        mainTitle.classList.remove('scrolled');
    }
}

// Load person json

let persons = null

fetch('./persons.json')
.then(response => response.json())
.then(data => {persons = data.persons});



Array.prototype.slice.call(document.querySelectorAll('.person')).map(person => {
    person.addEventListener('click', handleClickOnPerson);
})

function handleClickOnPerson(event) {
    let clickedPerson = persons.find(person => { return person.id == event.target.parentElement.id })
    document.querySelector('h2.naam').innerHTML = clickedPerson.name
    document.querySelector('p.leeftijd').innerHTML = clickedPerson.age
    document.querySelector('p.slug').innerHTML = clickedPerson.slug
    document.querySelector('img.person-2').src = clickedPerson.image    

    document.querySelector('.popup').style.transform = "scale(1)"
    document.querySelector('.popup').style.visibility = 'visible';
    
    document.body.classList.add('body-overlay');
}