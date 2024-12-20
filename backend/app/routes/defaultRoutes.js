import express from "express";
import Controller from "../controllers/controller.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Successfully connected to the NU Sci API!" });
});

router.route("/home").get(Controller.getBlogs);
router.route("/create-blog").post(Controller.postBlog);
router.route("/update-blog/:id").patch(Controller.updateBlog);
router.route("/delete-blog/:id").delete(Controller.deleteBlog);

export default router;
