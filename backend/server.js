const events = require('./data/events')
const express = require('express')

const app = express()

app.get('/api/events',(req, res)=>{
    res.json(events)
})

app.get('/api/event/:id',(req,res)=>{
    const event = events.find(e=>e._id === req.params.id)
    res.json(event)
})


app.listen(5002, console.log('Server is running on port 5002'))