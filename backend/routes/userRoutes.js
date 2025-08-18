import express from "express";
import { signUpUser, loginUser } from "../controllers/userController.js";
const router = express.Router();

//Login user
router.post("/login", loginUser);

//Signup user
router.post("/signup", signUpUser);

//

export default router;
