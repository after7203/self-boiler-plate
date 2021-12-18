const express = require("express")
const app = express()
const port = 5000
app.get("/", (req, res) => res.send("Hello"))
app.listen(5000, () => console.log(`server on port ${port}`))