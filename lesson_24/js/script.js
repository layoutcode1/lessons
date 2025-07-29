"use strict"

// Завдання #01
const items = document.querySelectorAll('.item')
items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            console.log('item is already active')
             item.classList.remove('active')
        } else {
            console.log('item is not active')
            item.classList.add('active')
        }
    })
})

// Завдання #02
window.addEventListener('load', () => {
    document.body.classList.add('loaded')
    if (document.body.classList.contains(`loaded`)) {
        console.log('the loaded class was added')
    } else {
        console.log('failed to add')
    }
})

// Завдання #03
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header__container')
    const footer = document.querySelector('footer')

    if (header && footer) {
        header.addEventListener('mouseover', () => {
            footer.classList.add('active')
        })

        header.addEventListener('mouseout', () => {
            footer.classList.remove('active')
        })
    }
})

// Завдання #04
function startCounterOnScroll() {
const object = document.querySelector('.object')
    if (!object) return
        let number = 1
    function isElementInViewport(element) {
    const rect = element.getBoundingClientRect()
        return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }
    function startCounter() {
        if (object.classList.contains('counter-running')) return
        object.classList.add('counter-running')
            const interval = setInterval(() => {
            if (number <= 15) {
                object.textContent = number++
            } else {
                clearInterval(interval)
            }
        }, 1000) 
    }
    window.addEventListener('scroll', () => {
        if (isElementInViewport(object)) {
            startCounter()
        }
    })
}
startCounterOnScroll()
