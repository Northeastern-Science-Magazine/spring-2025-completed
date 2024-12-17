import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Successfully connected to the NU Sci API!" });
});


export default router;
