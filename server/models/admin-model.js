const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const adminSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

adminSchema.pre("save", async function () {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const hashedPassword = await argon2.hash(user.password);
    user.password = hashedPassword;
  } catch (e) {
    next(e);
  }
});

adminSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "4h",
      }
    );
  } catch (e) {
    console.error(e);
  }
};

adminSchema.methods.comparePassword = function (password) {
  return argon2.verify(this.password, password);
};

const Admin = model("Admin", adminSchema);

module.exports = Admin;
