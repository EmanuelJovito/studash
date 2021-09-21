const knex = require('../database')

module.exports = {
  async index (req, res) {
    const results = await knex('students')

    return res.json(results)
  },
  async create(req, res, next) {
    try {
      const { student_code,
              student_name,
              student_address,
              student_email,
              student_number,
              student_course  
            } = req.body 

      await knex('students').insert({
        student_code,
        student_name,
        student_address,
        student_email,
        student_number,
        student_course
      })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  }
}