// JS Caesar Cipher

function encrypt(text, key) {
  var modifiedText = [];

  for (var i=0; i < text.length; i++) {
    var char = text.charCodeAt(i);
    if (char > 64 && char < 91) {
      modifiedText.push(String.fromCharCode((char - 65 + key) % 26 + 65));
    }
    else if (char > 96 && char < 123) {
      modifiedText.push(String.fromCharCode((char - 97 + key) % 26 + 97));
    } else {
      modifiedText.push(String.fromCharCode(char));
    }
  }
  return modifiedText.join('');
}

function decrypt(text, key) {
    var originalText = [];

    for (var i=0; i < text.length; i++) {
      var char = text.charCodeAt(i);
      if (char > 64 && char < 91) {
        originalText.push(String.fromCharCode((char - 65 - key) % 26 + 65));
      }
      else if (char > 96 && char < 123) {
        originalText.push(String.fromCharCode((char - 97 - key) % 26 + 97));
      } else {
        originalText.push(String.fromCharCode(char));
      }
    }
    return originalText.join('');
  }
}
