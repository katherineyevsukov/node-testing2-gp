const hobbits = [
  { name: 'sam' },
  { name: 'frodo' },
  { name: 'pippin' },
  { name: 'merry' },
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('hobbits')
    .truncate()
    .then(function() {
      return knex('hobbits').insert(hobbits);
    });
};

exports.hobbits = hobbits
