// prints a banner with * as a border

function printBanner(text) {
  // top of banner
  console.log('*'.repeat(text.length+4));
  // middle text
  console.log('* ' + text + ' *');
  // bottom banner
  console.log('*'.repeat(text.length+4));

  }
