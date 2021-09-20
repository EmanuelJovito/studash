
exports.up = knex => 
    knex.schema.createTable('students', table => {
    table.increments('student_code')
    table.text('student_name').notNullable()
    table.text('student_address').notNullable()
    table.text('student_email').notNullable()
    table.text('student_number').notNullable()
    table.text('student_course').notNullable()
  })

exports.down = knex => knex.schema.dropTable('students')
