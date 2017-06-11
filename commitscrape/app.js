// testing our github commit scrapper

const express = require('express');
const app = express();
const contributions = require('github-yearly-contributions');

contributions('jjspetz', function(err, amount){
  console.log('Contributions this year = ' + amount);
});
