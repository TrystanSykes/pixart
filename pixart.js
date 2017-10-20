var $colorField = $('#color-field');
var $setColor = $('#set-color');
var $brush = $('.brush');


$setColor.on('click', function(event){
  event.preventDefault();
  $brush.css('background',$colorField.val());
})

var $movieField = $('#movie-field');
var $setMovie = $('#set-movie');
var $stamp = $('.stamp');

$setMovie.on('click', function(event){
  event.preventDefault();
  var options = {
      url: 'http://www.omdbapi.com',
      method: 'get',
      data: {
        apikey: '2f6435d9',
        t: $movieField.val()
      }
    }

  $.ajax(options).done(function(resp){
  $stamp.css('background', 'url(' + resp['Poster'] + ')');
    
  })
})


var noOfDivs = 1000;

for (i = 0; i < noOfDivs; i++) {
  $square = $("<div>", {class: 'square'});
  $('body').append($square)
};

var $squares = $('.square');

var $paintType = $('#paint-type')
var $choose = $('.choose')


var paintValue = $brush.css('background')


$choose.on('click', function(){
  if ($paintType.val() === 'color'){
    paintValue = $brush.css('background')
  } else {
    paintValue = $stamp.css('background')
  }
})


$squares.on('mouseover', function(event){
  $(event.target).css('background', paintValue);
})

