import express from 'express'
import { authUser, getUserProfile, updateUserProfile, registerUser } from '../controller/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router();

//@desc     Authenticate user and generate token
//@route    GET /api/users/login
//@access   Public
router.post("/login", authUser);

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
router.route('/').post(registerUser)

// @desc    Get the user profile
// @route   GET /api/users/profile
// @access  private
router.route('/profile').get(protect, getUserProfile)
// @access  Private
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router;
