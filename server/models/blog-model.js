const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    summary: {
      type: String,
      required: [true, "Summary is required"],
      maxlength: [200, "Summary cannot exceed 200 characters"],
    },
    coverImage: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Travel", "Food", "Technology", "Lifestyle", "Fashion", "Other"],
    },
    tags: {
      type: [String],
      validate: {
        validator: (tags) => tags.length <= 5,
        message: "Cannot have more than 5 tags",
      },
    },
    creationDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.export = model("Blog", blogSchema);
