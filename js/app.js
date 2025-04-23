import { Canvas } from "./canvas.js";

const canvasElements = [...document.querySelectorAll('canvas')]

console.log(canvasElements)

let canvasArray = []

canvasElements.forEach(canvas => {
  let squareCanvas = new Canvas(canvas)
  canvasArray.push(squareCanvas)
})

window.addEventListener('resize', () => {
  canvasArray.forEach(canvas => {
    canvas.resizeCanvas()
    canvas.drawSquares()
  })
})