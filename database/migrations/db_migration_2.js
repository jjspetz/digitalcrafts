exports.up = (pgm, run) => {

  // step 1
  pgm.dropTable('restaurant');

  pgm.createTable('restaurant', {
    id: 'id',
    name: 'varchar(60)',
    address: 'varchar(80)',
    category: 'varchar(60)',
  });

  // step 2
  pgm.createTable('reviewer', {
    id: 'id',
    name: 'varchar(60)',
    email: 'varchar(80)',
    karma: {type: 'integer', check: 'karma BETWEEN 0 AND 7'}
  });

  // step 3
  pgm.createTable('review', {
    id: 'id',
    reviewer_id: {type: 'integer', references: 'reviewer(id)'},
    stars: {type: 'integer', check: 'stars BETWEEN 0 AND 5'},
    title: 'varchar(60)',
    review: 'varchar(250)',
    restaurant_id: {type: 'integer', references: 'restaurant(id)'},
  });
  run();
};

exports.down = (pgm, run) => {

  // step 1
  pgm.dropTable('restaurant');

  pgm.createTable('restaurant', {
    id: 'id',
    distance: 'integer',
    stars: {type: 'integer', check: 'stars BETWEEN 0 AND 5'},
    category: 'varchar(60)',
    favorite_dish: 'varchar(80)',
    takeout: 'boolean',
    last_visit: 'DATE'
  });

  // step 2
  pgm.dropTable('reviewer');

  // step 3
  pgm.dropTable('review');
  run();
};
