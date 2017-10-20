$colorField = $('#color-field');
$setColor = $('#set-color');
$brush = $('.brush');


$setColor.on('click', function(event){
  event.preventDefault();
  $brush.css('background',$colorField.val());


})