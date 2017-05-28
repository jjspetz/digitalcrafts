// changes (img) to fullscreen on hover.

$.fn.big = function() {
  var initialWidth;
  this.hover(function(event) {
    $(event.target).css('border-radius', '5px');
    initialWidth = $(event.target).css('width');
    $(event.target).css('width', '95%');
    $(event.target).css('margin', '2em auto');
  }, function(event) {
    $(event.target).css('border-radius', '0%');
    $(event.target).css('width', initialwidth);
  }
);
}
$('img').big();
