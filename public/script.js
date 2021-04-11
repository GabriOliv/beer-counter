const buttons = document.querySelectorAll('button')
const doneButton = document.querySelector('#done')
const resetButton = document.querySelector('#reset')

const litresText = document.querySelector('#litres')

const message = document.querySelector('#message')

let totalLitres = 0

buttons.forEach(b => b.addEventListener('click', () => {
    if (b.textContent.includes('L')) {
        totalLitres += Number(b.textContent.slice(0, 4))
        litresText.textContent = totalLitres + 'L'
    }
}))
doneButton.addEventListener('click', () => {
    if (totalLitres == 0.25) message.textContent = 'A beer'
    if (totalLitres >= 1) message.textContent = 'A few beers'
    if (totalLitres >= 2) message.textContent = 'Stop drinking!'
})
resetButton.addEventListener('click', () => {
    message.textContent = ''
    litresText.textContent = 0 + 'L'
    totalLitres = 0
})