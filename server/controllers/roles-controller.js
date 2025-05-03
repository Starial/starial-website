const Role = require("../models/roles-model");
const fs = require("fs");
const cloudinary = require("../cloudinary/cloudinaryConfig");

const addRole = async (req, res, next) => {
  try {
    // const { imageUrl, publicId, title } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "No file provided for upload." });
    }
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "Role Images",
    });
    if (!result.secure_url || !result.public_id) {
      return res.status(500).json({ message: "Cloudinary upload failed." });
    }
    try {
      fs.unlinkSync(req.file.path);
    } catch (e) {
      console.error("Error while deleting file: ", e);
    }
    const role = await Role.create({
      imgUrl: result.secure_url,
      publicId: result.public_id,
      title: req.body.title,
    });
    if (!role) {
      console.error("Unable to add role.");
      return res.status(500).json({ message: "Unable to add role." });
    }
    console.log("Added role successfully.");
    return res.status(201).json({ message: "Added role successfully." });
  } catch (e) {
    console.error("Error from roles controller: ", e);
    next(e);
  }
};

const showRoles = async (req, res, next) => {
  try {
    const roles = await Role.find();
    if (roles) {
      // console.log("Successfully fetched roles: ", roles);
      return res.status(200).json(roles);
    } else {
      console.log("Unable to fetch roles.");
      return res.status(500).json({ message: "Unable to fetch roles." });
    }
  } catch (e) {
    next(e);
  }
};

const deleteRole = async (req, res, next) => {
  const { id } = req.params;
  try {
    const role = await Role.findById(id);
    const publicId = role.publicId;
    await cloudinary.uploader.destroy(publicId);
    const deletedRole = await Role.findByIdAndDelete(id);
    if (deletedRole) {
      // console.log("Successfully deleted role.");
      return res.status(200).json({ message: "Role deleted successfully." });
    } else {
      // console.log("Unable to delete role.");
      return res.status(500).json({ message: "Unable to delete role." });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { addRole, showRoles, deleteRole };
