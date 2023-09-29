import express from 'express'
import events from './data/events.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'


const app = express()
dotenv.config()
connectDB()


app.get('/api/events',(req, res)=>{
    res.json(events)
})

app.get('/api/event/:id',(req,res)=>{
    const event = events.find(e=>e._id === req.params.id)
    res.json(event)
})


app.listen(5002, console.log('Server is running on port 5002'))