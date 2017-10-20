$colorField = $('#color-field');
$setColor = $('#set-color');
$brush = $('.brush');


$setColor.on('click', function(event){
  event.preventDefault();
  $brush.css('background',$colorField.val());
})

var noOfDivs = 1000;

for (i = 0; i < noOfDivs; i++) {
  $square = $("<div>", {class: 'square'});
  $('body').append($square)
};

$squares = $('.square');

$squares.on('mouseover', function(event){
  $(event.target).css('background', $brush.css('background'));
})

