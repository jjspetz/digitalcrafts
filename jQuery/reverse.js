$.fn.reverse = function () {
  this.click(function() {
    console.log(this.text())
    var str = this.text();
    str = str.split('');
    str = str.reverse();
    str = str.join('');
    this.text(str);
  });
}
