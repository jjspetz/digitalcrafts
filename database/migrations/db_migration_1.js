exports.up = (pgm, run) => {
  pgm.createTable('restaurant', {
    id: 'id',
    distance: 'integer',
    stars: {type: 'integer', check: 'stars BETWEEN 0 AND 5'},
    category: 'varchar(60)',
    favorite_dish: 'varchar(80)',
    takeout: 'boolean',
    last_visit: 'DATE'
  });
  run();
};
exports.down = (pgm, run) => {
 pgm.deleteTable('restaurant');
 run();
};
