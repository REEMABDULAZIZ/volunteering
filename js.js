$(document).ready(function(){
 console.log('hi ');

  $('#up').click(function(){
    $.scrollTo('#start', 600);
  });
  $('.carousel-container').flickity({
    // options
    autoPlay: 2000,
    cellAlign: 'left',
    contain: true,
    setGallerySize: false,
    wrapAround: true
  });
   
   $('form').on('submit',function(event){
     console.log(event);
     event.preventDefault();
  alert("Submitted");
})






});






 
  