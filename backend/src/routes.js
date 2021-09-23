const express = require('express')
const routes = express.Router()

const CoursesController = require('./controllers/CoursesController')
const UserController = require('./controllers/UserController')

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.index)

routes.get('/courses', CoursesController.index)
routes.post('/courses', CoursesController.create)
routes.put('/courses/:id', CoursesController.update)
routes.delete('/courses/:id', CoursesController.delete)
routes.get('/courses/:id', CoursesController.course)

module.exports = routes 