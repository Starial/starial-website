const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .email({ message: "Invalid email address." })
    .min(5, { message: "Email must be of at least 5 characters." }),
  password: z
    .string({ required_error: "Password is required." })
    .trim()
    .min(8, {
      message: "Password should be of atleast 8 characters and unique.",
    })
    .max(1024, { message: "Password should be less than 1024 characters." }),
});

module.exports = { loginSchema };
