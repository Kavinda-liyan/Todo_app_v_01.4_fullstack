import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  const secretKey = process.env.SECRET_KEY;
  return jwt.sign({ _id }, secretKey, { expiresIn: "3d" });
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    //create a token
    const token = createToken(user._id);
    res.status(200).json({ email, user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    //create a token
    const token = createToken(user._id);
    res.status(200).json({ email, user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signUpUser };
