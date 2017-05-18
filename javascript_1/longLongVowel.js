// converts double vowels to quintuple vowels

function vowelToFive(text) {

  text = text.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var ret;

  for (let i=0; i<text.length; i++) {
    vowels.forEach(function(item, index, array) {
       if (text[i] == item && text[i+1] == item) {
        //  console.log('has a double vowel at ' + i);
         ret = text.slice(0, i) + item.repeat(2) + text.slice(i, text.length)
        //  console.log(ret);
       }
     });
   }
  return ret;
}
