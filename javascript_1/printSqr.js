// prints an x by x square of *

function printSqr(num) {
  for (let i=0; i<num; i++) {
    for (let j=0; j<num; j++) {
      process.stdout.write('*');
    }
    console.log('');
  }
}
