import '@babel/polyfill'
import 'normalize.css'
import '$scss/index.scss'
import Controller from '$js/Controller'
import city from '$assets/city.mp4'

// Ready
document.addEventListener('DOMContentLoaded', () => {
    Controller.onReady()
})