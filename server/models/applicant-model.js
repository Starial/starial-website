const { Schema, model } = require("mongoose");

const applicantSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  resumeLink: { type: String, required: true },
  resumePublicId: { type: String, required: true },
  portfolio: { type: String, required: true },
  role: { type: String, required: true },
});

const Applicant = model("Applicant", applicantSchema);

module.exports = Applicant;
