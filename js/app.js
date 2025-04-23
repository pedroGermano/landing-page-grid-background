import { Canvas } from "./canvas.js";
import { services } from "./services.js";

const canvasElements = [...document.querySelectorAll('canvas')]
const aboutTiles = document.querySelector('.about__tiles')

console.log(canvasElements)

let canvasArray = []

canvasElements.forEach(canvas => {
  let squareCanvas = new Canvas(canvas)
  canvasArray.push(squareCanvas)
})

services.forEach(service => {
  let tile = document.createElement('div')
  tile.classList.add('service__tile')

  let icon = document.createElement('div')
  icon.innerHTML = service.icon
  tile.appendChild(icon)

  let serviceTitle = document.createElement('h4')
  serviceTitle.textContent = service.title

  let serviceDesc = document.createElement('p')
  serviceDesc.textContent = service.description
  tile.append(serviceTitle, serviceDesc)
  aboutTiles.appendChild(tile)

})

window.addEventListener('resize', () => {
  canvasArray.forEach(canvas => {
    canvas.resizeCanvas()
    canvas.drawSquares()
  })
})