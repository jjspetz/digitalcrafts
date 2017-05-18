// Leetspeak in JS

function leetspeak(text) {
  text = text.toUpperCase();
  var leettext = '';

  for (let i=0; i<text.length; i++) {
    if (text[i] == 'A')
      leettext += '4';
    else if (text[i] == 'E')
      leettext += '3';
    else if (text[i] == 'G')
      leettext += '6';
    else if (text[i] == 'I')
      leettext += '1';
    else if (text[i] == 'O')
      leettext += '0';
    else if (text[i] == 'S')
      leettext += '5';
    else if (text[i] == 'T')
      leettext += '7';
    else
      leettext += text[i];
  }

  return leettext;
}
