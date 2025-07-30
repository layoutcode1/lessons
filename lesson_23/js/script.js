"use strict"

// Завдання #01
const bodyElement = document.body
console.log(bodyElement)

//  Завдання #02
let ulCreated = false
let ulElement = null
function addULWithLIs(numberOfLIs = 5) {
    if (ulCreated) {
        console.warn('UL list already exists')
        return
    }
    if (typeof numberOfLIs !== 'number' || numberOfLIs < 1) {
        console.error('invalid number of LIs')
        return
    }
    const ul = document.createElement('ul')
    for (let i = 0; i < numberOfLIs; i++) {
        const li = document.createElement('li')
        li.innerHTML = `Item ${i + 1}`
        ul.appendChild(li)
    }
    const button = document.getElementById('switchoverBtn')
    if (button) {
        button.insertAdjacentElement('beforebegin', ul)
        ulCreated = true
        ulElement = ul
    } else {
        console.error('button not found in the DOM')
    }
}
function addListItemToUL(content) {
    if (!ulCreated || !ulElement) {
        console.error('UL list does not exist')
        return
    }
    if (content === null || content === undefined || typeof content !== 'string' || content.trim() === '') {
        console.error('empty string')
        return
    }
    const li = document.createElement('li')
    li.innerHTML = content 
    ulElement.appendChild(li)
}

addULWithLIs(5)

addListItemToUL('<strong>text item</strong>')
addListItemToUL('<img src="https://placehold.co/200x100" alt="image">')
addListItemToUL('<img src="img/StockCake01.jpg" alt="image">')
addListItemToUL('<a href="https://example.com">Link</a>')
addListItemToUL('<a href="https://example.com/image.jpg" alt="Image"><a href="https://example.com">link</a></a>')
addListItemToUL(`<img src="img/icon01.png" alt="ICon" class="icon">`)

// Завдання #03
document.body.classList.add('loaded')
    if (document.body.classList.contains('loaded')) {
        document.body.style.color = 'green'
}

// Завдання #04
const items = document.querySelectorAll('.item')
    if (items.length > 0) {
        items.forEach((item, index) => {
        item.classList.add('active')
        item.textContent = `Element No. ${index + 1}`
})
} else {
    console.log(`no elements with class item found`)
}

// Завдання #05
const button = document.getElementById('switchoverBtn')
setTimeout(() => {
    button.scrollIntoView({ behavior: 'smooth', block: 'start' })
}, 150)
button.addEventListener('click', function () {
this.textContent = 'Awesome!'
    this.style.backgroundColor = '#a5a728ff'
    this.style.backgroundImage = 'linear-gradient(55deg, #85a728ff, #65279eff)'
})

// Завдання #06
const link = document.querySelector(`.link`)
link.setAttribute(`data`, `100`)
const dataValue = parseInt(link.getAttribute(`data`), 10)
if (dataValue < 200) {
    link.style.color = 'red' 
    link.style.textTransform = 'capitalize'
}


