const express = require('express')
const app = express()
const cors = require('cors')
const config = require("./utils/config")
const bot = require("./bot")
const path = require('path');

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.post("/", async function(req,res){
    const result = await bot(req.body.message)
    res.json(result)
})

app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "./index.html"))
})

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})