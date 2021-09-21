
exports.seed = function(knex) {
  return knex('courses').del()
    .then(function () {
      return knex('courses').insert([
        {id: 1, course: 'Administração', workload: '300'},
        {id: 2, course: 'Direito', workload: '500'},
        {id: 3, course: 'Medicina', workload: '700'}
      ]);
    });
};
