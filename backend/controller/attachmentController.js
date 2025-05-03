const attachmentModel = require("../model/attachment");
const fs = require("fs");

const { saveImage, saveVideo } = require("../utils/savefile");

const generateAndFetchVideo = require("../utils/generateAndFetchVideo");

const getAttachments = async (req, res) => {
    try {
        const attachments = await attachmentModel.find();
        res.status(200).json(attachments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const convertToVideo = async (req, res) => {
    try {

        const file = req.files.file;
        const { text } = req.body;

        if (!file) {
            return res.status(400).json({ message: "Please provide file" });
        }

        const { fullPath, mimetype, filename } = await saveImage(file); //save image to server or storage 

        const fileBase64 = fs.readFileSync(fullPath, { encoding: "base64" }); // fetching image from storage and converting to base64

        const base64URI = `data:${mimetype};base64,${fileBase64}` // converting base64 to URI

        const getVideo = await generateAndFetchVideo(base64URI); // generating video and fetching video

        const saveVideoInStorage = await saveVideo(getVideo); // save video to server or storage

        await attachmentModel.create({
            imageurl: filename,
            videoUrl: saveVideoInStorage
        })

        res.status(200).json({ videoUrl: saveVideoInStorage });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAttachments,
    convertToVideo
}