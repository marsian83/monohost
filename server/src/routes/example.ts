import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "working fine ok" });
});

export default router;
