const Blog = require("../models/blog-model.js");
const cloudinary = require("../cloudinary/cloudinaryConfig.js");

// Create new Blog
const createBlog = async (req, res) => {
  try {
    console.log("Uploaded file:", req.file);
    const { title, content, summary, category, tags } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Cover image is required" });
    }

    const newBlog = new Blog({
      title,
      content,
      summary,
      coverImage: {
        public_id: req.file.public_id || req.file.filename,
        url: req.file.path,
      },
      category,
      tags: tags ? tags.split(",") : [],
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Blogs
const getAllBlogs = async (req, res) => {
  try {
    const { category, tag } = req.query;
    let query = {};

    if (category) query.category = category;
    if (tag) query.tags = tag;

    const Blogs = await Blog.find(query).sort({ createdAt: -1 });
    res.status(200).json(Blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single Blog
const getBlogById = async (req, res) => {
  try {
    const Blog = await Blog.findById(req.params.id);
    if (!Blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(Blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Blog
const updateBlog = async (req, res) => {
  try {
    const { title, content, summary, category, tags } = req.body;
    const updateData = { title, content, summary, category };

    if (tags) updateData.tags = tags.split(",");

    if (req.file) {
      const Blog = await Blog.findById(req.params.id);
      if (Blog?.coverImage?.public_id) {
        await cloudinary.uploader.destroy(Blog.coverImage.public_id);
      }
      updateData.coverImage = {
        public_id: req.file.public_id || req.file.filename,
        url: req.file.path,
      };
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Blog
const deleteBlog = async (req, res) => {
  try {
    const Blog = await Blog.findById(req.params.id);
    if (!Blog) return res.status(404).json({ message: "Blog not found" });

    if (Blog.coverImage.public_id) {
      await cloudinary.uploader.destroy(Blog.coverImage.public_id);
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllBlogs,
  getBlogById,
};
