$.fn.reverse = function (preserveCapitalization=true) {
  this.click((event) => {
    var str = $(event.target).text();
    str = str.split('');
    var newStr = [];
    if (preserveCapitalization == true) {
      for (let i=0; i<str.length; i++) {
        if (str[i] == str[i].toUpperCase() && /\S/.test(str[i])) {
          newStr.push(1);
          str[i] = str[i].toLowerCase();
        } else {
          newStr.push(0);
        }
      }
      str = str.reverse();
      for (let i=0; i<newStr.length; i++) {
        if (newStr[i] == 1) {
          str[i] = str[i].toUpperCase();
        }
      }
    }
    str = str.join('');
    $(event.target).text(str);
  });
}
$('h2').reverse();
