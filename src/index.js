import './styles/main.scss'
import './assets/_sprite.svg'

import './js/carousels'

const scrollToTopImg = document.querySelector('.scroll-to-top')
scrollToTopImg.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})