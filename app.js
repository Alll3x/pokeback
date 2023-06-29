const express = require('express')
const cors = require('cors')
const routes = require('./routes/index.js')
const app = express()
      app.use(express.json())
      app.use(cors())
require('dotenv').config();
routes(app)

app.listen(process.env.PORT, ()=>{
  try {
    console.log(`Server runnig on: ${process.env.URL}${process.env.PORT}`)
  } catch (error) {
    console.log(`has an error on your code: ${error}`)
  }
})