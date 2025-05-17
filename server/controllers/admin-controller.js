const Admin = require("../models/admin-model");

const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = Admin.create({ email, password });
    if (user) return res.status(200).json({ message: "User created." });
    else return res.status(500).json({ message: "Unable to create user." });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = await Admin.findOne({ email });
    if (userExist) {
      const user = await userExist.comparePassword(password);
      if (user) {
        return res.status(200).json({
          message: "Successfully logged in!",
          token: userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        return res.status(401).json({ message: "Invalid Email or password." });
      }
    } else {
      return res.status(400).json({ message: "Invalid credentials." });
    }
  } catch (e) {
    console.error("Error while logging in!");
    next(e);
  }
};

module.exports = { login, signUp };
