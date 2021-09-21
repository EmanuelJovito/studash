
exports.up = knex => 
    knex.schema.createTable('courses', table => {
    table.increments('id')
    table.text('course').unique().notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.text('workload').notNullable()
  })


exports.down = knex => knex.schema.dropTable('courses')
