import express from "express";
import { getEventById, getEvents } from "../controller/eventController";

const router = express.Router();

//@desc     Fetch all events
//@route    GET /api/events/
//@access   public
router.get("/", getEvents);

//@desc     Fetch an event by id
//@route    GET /api/events/:id
//@access   public
router.get("/:id", getEventById);

export default router;
