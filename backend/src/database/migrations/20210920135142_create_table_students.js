
exports.up = knex => 
    knex.schema.createTable('students', table => {
    table.increments('id')
    table.text('student_name').notNullable()
    table.text('student_CPF').notNullable()
    table.text('student_address').notNullable()
    table.text('student_CEP').notNullable()
    table.text('student_email').notNullable()
    table.text('student_number').notNullable()
    table.integer('course_id')
        .references('courses.id')
        .notNullable()
        .onDelete('CASCADE')
  })

exports.down = knex => knex.schema.dropTable('students')
