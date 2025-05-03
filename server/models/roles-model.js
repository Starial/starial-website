const { Schema, model } = require("mongoose");

const roleSchema = new Schema({
  imgUrl: { type: String, required: true },
  publicId: { type: String, required: true },
  title: { type: String, required: true },
});

const Role = model("Role", roleSchema);

module.exports = Role;
