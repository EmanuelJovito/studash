
exports.seed = function(knex) {
  return knex('students').del()
    .then(function () {
      return knex('students').insert([
        {id: 1, student_name: 'Aluno 1', student_CPF: '321434234134', student_address: 'Av. 1 casa 1', student_CEP: '65050-120',
        student_email: 'aluno1@gmail.com', student_number: '12134', course_id: 1},
        {id: 2, student_name: 'Aluno 2', student_CPF: '32143423413424', student_address: 'Av. 2 casa 2', student_CEP: '65050-121',
        student_email: 'aluno2@gmail.com', student_number: '12234', course_id: 1},
        {id: 3, student_name: 'Aluno 3', student_CPF: '32143423413426', student_address: 'Av. 3 casa 3', student_CEP: '65050-122',
        student_email: 'aluno3@gmail.com', student_number: '12334', course_id: 2},
        {id: 4, student_name: 'Aluno 4', student_CPF: '32143423413428', student_address: 'Av. 4 casa 4', student_CEP: '65050-123',
        student_email: 'aluno4@gmail.com', student_number: '12434', course_id: 2},
        {id: 5, student_name: 'Aluno 5', student_CPF: '32143423413420', student_address: 'Av. 5 casa 5', student_CEP: '65050-124',
        student_email: 'aluno5@gmail.com', student_number: '1254', course_id: 3},
        {id: 6, student_name: 'Aluno 6', student_CPF: '3214342312341342', student_address: 'Av. 6 casa 6', student_CEP: '65050-125',
        student_email: 'aluno6@gmail.com', student_number: '12634', course_id: 3},
        {id: 7, student_name: 'Aluno 7', student_CPF: '321434234231641342', student_address: 'Av. 7 casa 7', student_CEP: '65050-126',
        student_email: 'aluno7@gmail.com', student_number: '12734', course_id: 3},
      ]);
    });
};
