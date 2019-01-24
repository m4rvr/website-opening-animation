import '@babel/polyfill'
import 'normalize.css'
import '$scss/index.scss'
import Controller from '$js/Controller'

// Ready
document.addEventListener('DOMContentLoaded', () => {
    Controller.onReady()
})

// Resize
window.addEventListener('resize', () => {
    Controller.onResize()
})