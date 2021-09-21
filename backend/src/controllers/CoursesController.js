const knex = require('../database')

module.exports = {
  async index (req, res) {
    const results = await knex('courses')

    return res.json(results)
  },
  async create(req, res, next) {
    try {
      const { id,
              course,
              created_at,
              workload
            } = req.body 

      await knex('courses').insert({
        id,
        course,
        created_at,
        workload
      })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  },
  async update(req, res, next) {
    try {
      const { id,
              course,
              created_at,
              workload
            } = req.body 

      await knex('courses').update({
        id,
        course,
        created_at,
        workload
      }).where('id', '=', req.params.id)

      return res.send()
    } catch (error) {
      next(error)
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params 

      await knex('courses').where('id', '=', id).del()

      return res.send()
    } catch (error) {
      next(error)
    }
  }
}