const fs = require("fs");
const cloudinary = require("../cloudinary/cloudinaryConfig");
const Applicant = require("../models/applicant-model");

const newApplicant = async (req, res, next) => {
  try {
    const { fullname, email, phone, portfolio, role } = req.body;
    // console.log("Req.body: ", req.body);
    if (!req.file) {
      return res.status(400).json({ message: "No file provided for upload." });
    }
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "Applicant's Resumes",
      resource_type: "raw",
    });
    // console.log("result: ", result);
    if (!result.secure_url || !result.public_id) {
      return res.status(500).json({ message: "Cloudinary upload failed." });
    }
    try {
      fs.unlinkSync(req.file.path);
    } catch (e) {
      console.error("Error while deleting file: ", e);
    }
    // try {
    const applicant = await Applicant.create({
      fullname: fullname,
      email: email,
      phone: phone,
      resumeLink: result.secure_url,
      resumePublicId: result.public_id,
      portfolio: portfolio,
      role: role,
    });
    // } catch (e) {
    //   console.error("Error while creating application: ", e);
    // }
    // console.log("Application: ", applicant);
    if (!applicant) {
      console.error("Unable to send application.");
      return res.status(500).json({ message: "Unable to send application." });
    }
    console.log("Application sent successfully.");
    return res.status(201).json({ message: "Application sent successfully." });
  } catch (e) {
    console.error("Unable to send application.");
    next(e);
  }
};

const showApplicants = async (req, res, next) => {
  try {
    const applicants = await Applicant.find();
    if (applicants) return res.status(200).json(applicants);
    else
      return res.status(500).json({ message: "Unable to fetch applications." });
  } catch (e) {
    next(e);
  }
};

const deleteApplicant = async (req, res, next) => {
  const { id } = req.params;
  try {
    const applicant = await Applicant.findById(id);
    const publicId = applicant.resumePublicId;
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "raw",
    });
    const deletedApplicant = await Applicant.findByIdAndDelete(id);
    if (deletedApplicant)
      return res
        .status(200)
        .json({ message: "Application deleted successfully." });
    else
      return res.status(500).json({ message: "Unable to delete application." });
  } catch (e) {
    next(e);
  }
};

module.exports = { newApplicant, showApplicants, deleteApplicant };
