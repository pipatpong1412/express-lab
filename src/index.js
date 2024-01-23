require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
const errorHandler = require('./middlewares/error')
const notFoundHandler = require('./middlewares/notFound')
const authRoute = require('./routes/authRoute')

app.use(express.json())
app.use(cors())
app.use(errorHandler)
app.use('*', notFoundHandler)
app.use('/auth', authRoute)

app.listen(PORT, () => console.log(`APP IS RUNNING ON PORT ${PORT}`))