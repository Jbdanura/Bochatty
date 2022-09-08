require("dotenv").config()

const express = require('express')
const app = express()
const cors = require('cors')
const bot = require("./bot")
const path = require('path');

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.post("/message", async function(req,res){
    const result = await bot(req.body.message)
    res.json(result)
})

app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "./index.html"))
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})