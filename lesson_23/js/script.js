"use strict"

// Завдання #1
const bodyElement = document.body
console.log(bodyElement)

//  Завдання #2
function addListsToBody(listCount = 1, itemCount = 3) {
    if (!document.body) {
        console.error('error')
        return
    }
    for (let i = 0; i < listCount; i++) {
        const ul = document.createElement(`ul`)
        if (!ul) {
            console.error('failed')
            continue
        }
        for (let j = 0; j < itemCount; j++) {
            const li = document.createElement(`li`)
            if (!li) {
                console.error('failed')
                continue
            }
            li.textContent = `object ${j + 1}`
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
    }
}
addListsToBody() 
addListsToBody(2, 3)


// Завдання #3
document.body.classList.add('loaded')
    if (document.body.classList.contains('loaded')) {
        document.body.style.color = 'green'
}

// Завдання #4
const items = document.querySelectorAll('.item')
    if (items.length > 0) {
        items.forEach((item, index) => {
        item.classList.add('active')
        item.textContent = `Element No. ${index + 1}`
})
} else {
    console.log(`no elements with class item found`)
}

// Завдання #5
const button = document.getElementById('switchoverBtn')
button.scrollIntoView({ behavior: `smooth` })
button.addEventListener('click', function () {
button.textContent = 'Awesome!'
    button.style.backgroundColor = '#a5a728ff'
    button.style.backgroundImage = 'linear-gradient(55deg, #85a728ff, #65279eff)'
})

// Завдання #6
const link = document.querySelector(`.link`)
link.setAttribute(`data`, `100`)
const dataValue = parseInt(link.getAttribute(`data`), 10)
if (dataValue < 200) {
    link.style.color = 'red' 
    link.style.textTransform = 'capitalize'
}
