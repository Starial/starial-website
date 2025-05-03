const { z } = require("zod");

const contactSchema = z.object({
  fullname: z
    .string({ required_error: "Please enter your fullname." })
    .trim()
    .min(10, { message: "Your fullname must be of atleast 10 characters." })
    .max(255, { message: "Fullname can be of atmost 255 characters." }),
  email: z
    .string({ required_error: "Please enter your email." })
    .trim()
    .email("Invalid Email address.")
    .min(7, { message: "Your email must be of atleast 7 characters." })
    .max(255, { message: "Email can be of atmost 255 characters." }),
  phoneNumber: z
    .string({ required_error: "Please enter your fullname." })
    .regex(/^[6-9]\d{9}$/, "")
    .min(10, { message: "Your fullname must be of atleast 10 characters." })
    .max(255, { message: "Fullname can be of atmost 255 characters." }),
  message: z
    .string({ required_error: "Message is required." })
    .trim()
    .min(20, { message: "Message should be of atleast 20 characters." }),
});

module.exports = contactSchema;
