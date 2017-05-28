// changes (img) bigger on hover.

$.fn.big = function() {
  var initialWidth;
  this.hover(function(event) {
    initialWidth = $(event.target).css('width');
    console.log(initialWidth);
    $(event.target).css('width', '100%');
  }, function(event) {
    $(event.target).css('width', initialWidth);
  }
);
}
$('img').big();
