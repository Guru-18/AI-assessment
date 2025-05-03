const express = require("express");

const { convertToVideo, getAttachments } = require("../controller/attachmentController");

const router = express.Router();

router.post("/convert-to-video", convertToVideo) // convert image to video
router.get("/all", getAttachments) // get all generated videos

module.exports = router;