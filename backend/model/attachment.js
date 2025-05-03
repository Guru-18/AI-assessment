const mongoose = require("mongoose");

const attachementSchema = new mongoose.Schema({
    imageurl: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
});

const AttachmentModel = mongoose.model("Attachment", attachementSchema);
module.exports = AttachmentModel;