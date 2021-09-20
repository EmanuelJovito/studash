const express = require('express')
const routes = require('./routes')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()
app.use(routes)

app.listen(PORT, HOST, () => console.log('Server is running'))