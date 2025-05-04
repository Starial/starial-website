const jwt = require("jsonwebtoken");
const Admin = require("../models/admin-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided." });
  }
  const jwtToken = token.replace("Bearer ", "").trim();
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // const adminData = await Admin.findOne({ email: isVerified.email }).select({
    //   password: 0,
    // });
    // console.log("Verified Admin Data: ", adminData);
    // req.admin = adminData;
    // req.token = token;
    // req.adminId = adminData._id;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Unauthorized. Invalid Token" });
  }
};

module.exports = authMiddleware;
