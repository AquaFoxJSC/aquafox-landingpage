let canvas
let fadeTimerId
let progressTimerId
let currentProgress
let showing

const options = {
  autoRun: true,
  barThickness: 5,
  shadowBlur: 10,
  shadowColor: 'rgba(0,   0,   0,   .6)',
  className: null,
}

function addEvent(elem, type, handler) {
  if (elem.addEventListener) elem.addEventListener(type, handler, false)
  else if (elem.attachEvent) elem.attachEvent(`on${type}`, handler)
  else elem[`on${type}`] = handler
}

function repaint() {
  canvas.width = window.innerWidth
  canvas.height = options.barThickness * 5 // need space for shadow

  const ctx = canvas.getContext('2d')
  ctx.shadowBlur = options.shadowBlur
  ctx.shadowColor = options.shadowColor

  ctx.lineWidth = options.barThickness
  ctx.beginPath()
  ctx.moveTo(0, options.barThickness / 2)
  ctx.lineTo(
    Math.ceil(currentProgress * canvas.width),
    options.barThickness / 2,
  )
  ctx.strokeStyle = '#2684FF'
  ctx.stroke()
}

function createCanvas() {
  canvas = document.createElement('canvas')
  const style = canvas.style
  style.position = 'fixed'
  style.top = style.left = style.right = style.margin = style.padding = 0
  style.zIndex = 100001
  style.display = 'none'
  document.body.appendChild(canvas)
  addEvent(window, 'resize', repaint)
}

function progress(to) {
  if (typeof to === 'undefined') return currentProgress
  if (typeof to === 'string') {
    to = (to.indexOf('+') >= 0 || to.indexOf('-') >= 0
      ? currentProgress
      : 0) + parseFloat(to)
  }
  currentProgress = to > 1 ? 1 : to
  repaint()
  return currentProgress
}

export function show() {
  if (showing) return
  showing = true
  if (fadeTimerId !== null) window.cancelAnimationFrame(fadeTimerId)
  if (!canvas) createCanvas()
  canvas.style.opacity = 1
  canvas.style.display = 'block'
  progress(0)
  if (options.autoRun) {
    (function loop() {
      progressTimerId = window.requestAnimationFrame(loop)
      progress(
        `+${0.1 * Math.pow(1 - Math.sqrt(currentProgress), 2)}`,
      )
    }())
  }
}

export function hide() {
  if (!showing) return
  showing = false
  if (progressTimerId != null) {
    window.cancelAnimationFrame(progressTimerId)
    progressTimerId = null
  }
  (function loop() {
    if (progress('+.1') >= 1) {
      canvas.style.opacity -= 0.05
      if (canvas.style.opacity <= 0.05) {
        canvas.style.display = 'none'
        fadeTimerId = null
        return
      }
    }
    fadeTimerId = window.requestAnimationFrame(loop)
  }())
}
