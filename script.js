const mainElement = document.querySelector('main')
const textElement = document.querySelector('.floating-text')
const offset = 50
let xDirection = 1
let yDirection = 1

const floatingText = () => {
  const { width: mainWidth, height: mainHeight } =
    mainElement.getBoundingClientRect()
  const { width: textWidth, height: textHeight } =
    textElement.getBoundingClientRect()

  let currentX = parseFloat(getComputedStyle(textElement).left || '0')
  let currentY = parseFloat(getComputedStyle(textElement).top || '0')

  let newX = currentX + xDirection
  let newY = currentY + yDirection

  if (newX + textWidth > mainWidth + offset || newX < offset) {
    xDirection *= -1
  }

  if (newY + textHeight > mainHeight + offset || newY < offset) {
    yDirection *= -1
  }

  textElement.style.left = newX + 'px'
  textElement.style.top = newY + 'px'

  requestAnimationFrame(floatingText)
}

floatingText()

const widthAdjust = 108 + 13
const heightAdjust = 106 + 13
const radius = 29

// Add text to SVG
function addText() {
  const textPathElement = document.getElementById('text-path')
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const borderLength =
    (windowWidth - widthAdjust) * 2 + (windowHeight - heightAdjust) * 2
  const textSize = 138
  const oSize = 10
  let amount = (borderLength - textSize) / oSize
  amount = Math.floor(amount)
  let text = ' n!   Feel better s'

  for (let index = 0; index < amount; index++) {
    text += 'o'
  }

  textPathElement.textContent = text
}

// Set initial size of SVG
function setInitialSVGSize() {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  const parentSvg = document.getElementById('border')
  const pathElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  )
  pathElement.setAttribute('id', 'curve')
  pathElement.setAttribute(
    'd',
    `M 60 32 h ${
      windowWidth - widthAdjust
    } a ${radius} ${radius} 0 0 1 ${radius} ${radius} v ${
      windowHeight - heightAdjust
    } a ${radius} ${radius} 0 0 1 -${radius} ${radius} h -${
      windowWidth - widthAdjust
    } a ${radius} ${radius} 0 0 1 -${radius} -${radius} v -${
      windowHeight - heightAdjust
    } a ${radius} ${radius} 0 0 1 ${radius} -${radius}`
  )
  pathElement.setAttribute('fill', 'transparent')
  console.log('pathElement', pathElement)
  parentSvg.appendChild(pathElement)
  addText()
}

setInitialSVGSize()

// Update path when window size changes
function updatePathD() {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const pathElement = document.getElementById('curve')
  const newPathD = `M 60 32 h ${
    windowWidth - widthAdjust
  } a ${radius} ${radius} 0 0 1 ${radius} ${radius} v ${
    windowHeight - heightAdjust
  } a ${radius} ${radius} 0 0 1 -${radius} ${radius} h -${
    windowWidth - widthAdjust
  } a ${radius} ${radius} 0 0 1 -${radius} -${radius} v -${
    windowHeight - heightAdjust
  } a ${radius} ${radius} 0 0 1 ${radius} -${radius}`
  pathElement.setAttribute('d', newPathD)
  addText()
}

window.addEventListener('resize', updatePathD)
