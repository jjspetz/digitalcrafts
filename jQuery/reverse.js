$.fn.reverse = function () {
  this.click((event) => {
    var str = $(event.target).text();
    str = str.split('');
    str = str.reverse();
    str = str.join('');
    $(event.target).text(str);
  });
}
$('h2').reverse();
