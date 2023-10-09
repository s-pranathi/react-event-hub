import Event from '../models/eventModel.js'
import asyncHandler from "express-async-handler"

const getEvents = asyncHandler(async(req, res)=>{
    const events = await Event.find({})
    res.json(events)
})

const getEventById = asyncHandler(async(req,res)=>{
    const event = await Event.findById(req.params.id)
    if(event){
        res.json(event)
    }
    else{
        res.status(404).json({message:"Event not found"})
    }
    
})

export {getEvents, getEventById}