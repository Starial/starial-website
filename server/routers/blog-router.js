const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog-controller.js");
const authMiddleware = require("../middlewares/auth-middleware.js");
const upload = require("../cloudinary/multer.js");

const router = express.Router();

router.post("/", upload.single("coverImage"), authMiddleware, createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.put("/:id", upload.single("coverImage"), authMiddleware, updateBlog);
router.delete("/:id", authMiddleware, deleteBlog);

module.exports = router;
