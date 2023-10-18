import express from "express";
import {
  addOrderItems,
  updateOrderToPaid,
  getOrderById,
  getOrders,
} from "../controller/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// @desc    Create a new order
// @route   POST /api/orders/
// @access  private
router.route("/").post(protect, addOrderItems);

// @desc    get order by Id
// @route   GET /api/orders/:id
// @access  private
router.route("/:id").get(protect, getOrderById);

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  private
router.route("/:id/pay").put(protect, updateOrderToPaid);

//@ desc    get orders by user
//@route    GET /api/orders
//@access   private
router.route("/").get(protect, getOrders);

export default router;
