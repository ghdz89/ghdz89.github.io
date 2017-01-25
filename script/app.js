$(document).ready(function(){
  $('div.portfolio').hide();
  $('a.portfolio-link').click(function(){
    $(this).toggleClass('red');
    $('div.about').toggle();
    $('div.portfolio').toggle();
  });
});