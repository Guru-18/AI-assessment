const attachmentModel = require("../model/attachment");

const cleanupDatabase = async() => {
    try {
      console.log("🧹 Cleaning up database...");
  
      // Replace 'videos' with your actual collection name
      await attachmentModel.deleteMany({});
  
      console.log("✅ All documents deleted from the 'videos' collection.");
    } catch (error) {
      console.error("❌ Error cleaning up database:", error);
    } finally {
      process.exit(0);
    }
  }
  
  // Listen for SIGTERM (sent by Render on shutdown)
  process.on("SIGTERM", cleanupDatabase);