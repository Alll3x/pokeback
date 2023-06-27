// Modules
  const express = require('express')
// Configs
  // Express
    const app = express()
          app.use(express.json())
  //DotEnv
    require('dotenv').config();
// Rotas
  // Main
    app.get('/', (req, res) => {
      res.send('ogay')
    })

// Server
app.listen(process.env.PORT, ()=>{
  try {
    console.log(`Server runnig on: ${process.env.URL}${process.env.PORT}`)
  } catch (error) {
    console.log(`has an error on your code: ${error}`)
  }
})