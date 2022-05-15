const express = require('express')
const app = express()
const cors = require('cors')
const config = require("./utils/config")
const bot = require("./bot")

app.use(cors())
app.use(express.json())


app.post("/", async function(req,res){
    const result = await bot(req.body.message)
    res.json(result)
})


app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})