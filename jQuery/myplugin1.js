// changes img to a circle with border on hover ends when gone.

$.fn.circle = function() {
  this.hover(function(event) {
    $(event.target).css('border-radius', '50%');
    $(event.target).css('border', '3px solid pink');
  }, function(event) {
    $(event.target).css('border-radius', '0%');
    $(event.target).css('border', 'none');
  }
);
}
$('img').circle();
