import $ from 'jquery'
import slick from './slick.min'

$(document).ready(function(){
  $('.services').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrows: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '25px',
          infinite: false,
        }
      },
    ]
  })
})
