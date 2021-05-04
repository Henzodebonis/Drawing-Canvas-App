const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const clearBtn = document.getElementById('clear')
const decreaseBtn = document.getElementById('decrease')
const increaseBtn = document.getElementById('increase')
const colorBtn = document.getElementById('color')

var size = 20
let color = 'black'
var isPressed = false
var x
var y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {

    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

increaseBtn.addEventListener('click', () => {
    size += 5

    document.getElementById('size').innerText = `${size}`

    if (size > 45) { size = 45 }
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    document.getElementById('size').innerText = `${size}`

    if (size < 10) {
        size = 10
    }
})

clearBtn.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))



function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

colorBtn.addEventListener('change', function () {
    color = this.value
    console.log(color)
})