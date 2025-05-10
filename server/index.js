if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4002;
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routers/contact-router");
const downloadRoutes = require("./routers/download-link-router");
const ErrorMiddleware = require("./middlewares/error-middleware");
const roleRoutes = require("./routers/roles-router");
const url = process.env.MONGODB_URL;
const applicantRoutes = require("./routers/applicant-router");
const adminRoutes = require("./routers/admin-router");

const corsConfig = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  methods: "GET, POST, PUT, PATCH, HEAD, DELETE",
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected successfully to database.");
    app.listen(PORT, () => {
      console.log(`Listening on port : ${PORT}`);
    });
  })
  .catch((e) => {
    console.error("Unable to connect to database.", e);
  });

app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/download", downloadRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/applicants", applicantRoutes);
app.use(ErrorMiddleware);
