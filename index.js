const body = document.querySelector('body')

const timerDiv = document.getElementById('timer')
timerDiv.textContent = 0 

let count = 0


const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')

startButton.addEventListener('click', startCounter)
stopButton.addEventListener('click', stopCounter)
resetButton.addEventListener('click', () => {
    count = 0
    stopCounter()
    timerDiv.textContent = count
    startButton.disabled = false
    startButton.textContent = 'Start'
})

function startCounter() {
    startButton.disabled = true
    intervalID = setInterval(counter, 1000);
    
}

function stopCounter() {
    startButton.disabled = false
    if(timerDiv.textContent !== '0') startButton.textContent = 'Resume'
    clearInterval(intervalID)
}












function counter() {
    debugger
    count++
    timerDiv.textContent = count
}

