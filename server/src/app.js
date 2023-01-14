const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const userRouter = require('./routes/user.route')


const app = express();

/**
 * Middlewares
 */
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

/**
 * API routes
 */
app.use('/api/user', userRouter)


module.exports = app