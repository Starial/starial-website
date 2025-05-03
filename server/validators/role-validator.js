const { z } = require("zod");

const roleSchema = z.object({
  title: z
    .string({ required_error: "Title is required." })
    .trim()
    .min(5, { message: "Title must be of atleast 5 characters." }),
});

module.exports = roleSchema;
