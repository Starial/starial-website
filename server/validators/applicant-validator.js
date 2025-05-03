const { z } = require("zod");

const applicantSchema = z.object({
  fullname: z
    .string({
      required_error: "Please enter your correct name.",
    })
    .trim()
    .min(5, {
      message: "Fullname should be of atleast than 5 characters.",
    })
    .max(255, { message: "Fullname should be less than 255 characters." }),
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .email({ message: "Invalid email address." })
    .min(5, { message: "Email must be of at least 5 characters." }),
  phone: z
    .string({ required_error: "Please enter your phone number." })
    .regex(/^\d{10,15}$/, "Phone number must be between 10 and 15 digits.")
    .min(10, { message: "Phone number must be of atleast 10 digits." })
    .max(15, {
      message: "Phone number must be less than 15 digits.",
    }),
  portfolio: z.string().trim(),
  role: z.string().trim(),
});

module.exports = applicantSchema;
