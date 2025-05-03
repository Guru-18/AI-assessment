const fs = require("fs");
const path = require("path");

const axios = require("axios");

const saveImage = async (file) => {
  try {
    const folderPath = path.join(__dirname, "../public/uploads/images");

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const nameWithoutExt = path.basename(file.name, path.extname(file.name));
    const extension = file.mimetype.split("/")[1];
    const filename = `${nameWithoutExt}-${Date.now()}.${extension}`;

    const fullPath = path.join(folderPath, filename);

    await file.mv(fullPath);

    return { mimetype: file.mimetype, filename, fullPath };
  } catch (error) {
    console.error("[SAVE_IMAGE_ERROR]", error);
    throw error;
  }
};

const saveVideo = async (videoURL) => {
  try {
    const folderPath = path.join(__dirname, "../public/uploads/videos");

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    console.log(videoURL)

    const response = await axios.get(videoURL, {
      responseType: "stream"
    })


    const filename = `${Date.now()}.mp4`;

    const fullPath = path.join(folderPath, filename);

    const writeStream = fs.createWriteStream(fullPath)

    return new Promise((resolve, reject) => {
      response.data.pipe(writeStream);
  
      writeStream.on('finish', () => {
        console.log("Video saved to:", fullPath);
        resolve(filename);
      });
  
      writeStream.on('error', (error) => {
        console.error("[SAVE_VIDEO_ERROR]", error);
        reject(error); 
      });
    });
  } catch (error) {
    console.log("[SAVE_VIDEO_ERROR]", error);
    throw error
  }
}

module.exports = {
  saveImage,
  saveVideo 
};
