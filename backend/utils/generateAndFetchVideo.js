
const generateAndFetchVideo = async(URI) => {
    try {
        const generatedVideoResponse = await fetch('https://api.aimlapi.com/v2/generate/video/runway/generation', {
            method: 'POST',
            headers: {
              "Authorization": `Bearer ${process.env.AIML_API_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "model": "runway/gen4_turbo",
              "prompt": "Create a cinematic video from this fashion image featuring a model in a stylish pose. Add natural body movements like slight head turns, hand gestures, or posture shifts to bring the model to life. Animate flowing elements such as hair or clothing, with soft lighting, subtle transitions, and gentle motion blur. Highlight the clothing textures and the model’s expression in a vibrant, elegant, and fashion-forward style.",
              "image_url": URI,
              "duration": 5,
              "ratio": "16:9",
              "seed": 1
            })
        });

        const generatedVideoId = await generatedVideoResponse.json();

        let videoStatus = "queued";
        let videoData = null;
    
        while (videoStatus !== "completed") {
            const videoDataResponse = await fetch(`https://api.aimlapi.com/v2/generate/video/runway/generation?generation_id=${generatedVideoId.id}`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${process.env.AIML_API_KEY}`,
                    "Accept": "*/*"
                },
            });
    
            videoData = await videoDataResponse.json();
            videoStatus = videoData.status;
    
            if (videoStatus !== "completed") {
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }
    
        return videoData.video[0];
    } catch (error) {
        console.log("[GENERATE_VIDEO_ERROR]", error);
        throw error
    }
}

module.exports = generateAndFetchVideo