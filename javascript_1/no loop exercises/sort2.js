// sort by string length

var print;
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

print = people.sort((x, y) => x.length < y.length ? -1 : x.length > y.length ? 1 : 0);
