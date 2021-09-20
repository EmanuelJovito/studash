
exports.seed = function(knex) {
  return knex('students').del()
    .then(function () {
      return knex('students').insert([
        {student_code: 1, student_name: 'Aluno 1', student_address: 'Av. 1 casa 1', 
        student_email: 'aluno1@gmail.com', student_number: '12134', student_course: 'Direito'},
        {student_code: 2, student_name: 'Aluno 2', student_address: 'Av. 2 casa 2', 
        student_email: 'aluno2@gmail.com', student_number: '12234', student_course: 'Direito'},
        {student_code: 3, student_name: 'Aluno 3', student_address: 'Av. 3 casa 3', 
        student_email: 'aluno3@gmail.com', student_number: '12334', student_course: 'Administração'},
        {student_code: 4, student_name: 'Aluno 4', student_address: 'Av. 4 casa 4', 
        student_email: 'aluno4@gmail.com', student_number: '12434', student_course: 'Administração'},
        {student_code: 5, student_name: 'Aluno 5', student_address: 'Av. 5 casa 5', 
        student_email: 'aluno5@gmail.com', student_number: '1254', student_course: 'Medicina'},
        {student_code: 6, student_name: 'Aluno 6', student_address: 'Av. 6 casa 6', 
        student_email: 'aluno6@gmail.com', student_number: '12634', student_course: 'Medicina'},
        {student_code: 7, student_name: 'Aluno 7', student_address: 'Av. 7 casa 7', 
        student_email: 'aluno7@gmail.com', student_number: '12734', student_course: 'Medicina'},
      ]);
    });
};
