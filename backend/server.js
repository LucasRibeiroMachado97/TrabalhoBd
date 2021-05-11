const express = require('express')
const bodyParsed = require('body-parser')
const cors = require('cors')


const ListControl = require('./src/listControl')


const port = 3001
const app = express()
app.use(bodyParsed.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParsed.json());

app.get('/', (req, res) =>{

    res.end("<h1> Hellou Word </h1>")
})

app.post('/set', (req , res) =>{
    //console.log(req.body)
    ListControl.set(req.body , res)    
})
app.get('/list', ListControl.get)

app.delete('/delete', (req, res) =>{
    ListControl.delete(req.body, res)
})

app.put('/update', (req, res) =>{
    //console.log(req.body)
    ListControl.put(req.body, res)
})

app.listen(port , () => {console.log("Conect in", port)})
