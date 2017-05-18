// prints an x by x box of *

function printBox(width, height) {
  for (let i=0; i<height; i++) {
      if (i==0 || i==height-1) {
      for (let j=0; j<width; j++) {
        process.stdout.write('*');
      }
      console.log('');
    } else {
      process.stdout.write('*');
      for (let k=1; k<width-1; k++) {
        process.stdout.write(' ');
      }
      console.log('*');
    }
  }
}
