const express = require('express')
const routes = require('./routes')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use(express.json())
app.use(routes)

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

app.listen(PORT, HOST, () => console.log('Server is running'))