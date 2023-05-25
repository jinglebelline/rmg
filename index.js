const express = require('express')
const path = require('path')
//const ejs = require("ejs")

const app = express()

const port = process.env.PORT || 2000;

app.use(express.static('build'))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port,()=>{
    console.log(`Example app listening at ${port}`)
})
