const express = require('express');
const cors = require('cors');
const db = require('./Backend/Data/config.js');

const PORT = 4005;

const app = express();

app.use(express.json())
app.use(cors())

app.get('/api/alsoviewed', async(req, res) =>{
  try {
    const {rows} = await db.query('SELECT * FROM alsoviewed;')
    res.json(rows)

  } catch (error) {
    console.log(error)
  }
})

app.get('/api/explorelinks', async(req, res) =>{
  try {
    const {rows} = await db.query('SELECT * FROM explorelinks;')
    res.json(rows)

  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, ()=> console.log(`Server is running on post ${PORT}`))