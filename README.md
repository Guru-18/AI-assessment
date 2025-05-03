=> Which AI model you chose and why

I selected Runway Gen-4 Turbo because it offers the ideal balance between speed, cost-efficiency, and visual quality for generating short-form video content from images and more over Runway is highly recommended according to the developers over the internet and even though Chat-GPT also recommends this model.


=> How the pipeline works

Image Upload (frontend + backend)
  
  -> The user can upload any fashion image like clothes or model image from the frontend.
  
  -> The backend receives the image and convert the image into binary data i.e base64 and send it to AI model via API.

Polling connection
  
  -> The backend has a polling logic which initiates and request for the video after every 5 seconds to check if the video generation is completed 

Storing Video and display
  
  -> After receiving the generated video the backend has logic to store the video file to local storage via streams and save the URL path of the video to database to watch out for the generated video in the collection tab(frontend)
  
  -> REMEMBER THE VIDEO FILES THAT ARE BEING STORED IN THE BACKEND WILL BE AUTOMATICALLY DELETED AFTER 5-10 MINTUES OF INACTIVITY.


=> Any limitations or assumptions
As i have used only one AI Model in this Project and the limitations that faced is that, no matter how good your prompt is for converting still images to video, sometimes the output is not up to the expectations
And about assumptions Sora AI model would be the best for text to video but it is expensive.


=> SETUP INSTRUCTIONS
  -> Although the project has been deployed online 
  
  -> frontend URL -> https://majestic-wisp-04bd65.netlify.app/ (might take around 5 minutes to access backend as the backend deployed on render server which will automatically stop the backend service after 5 mins of inactivity)

=> instruction for localhost

 -> download the project and extract it somewhere

> navigate to the project root folder then run the following commands in CMD for frontend folder

cd frontend

npm i

npm start

http://localhost:3001

> for backend folder

cd backend

npm i

nodemon index.js or node index.js

THANK YOU🎉

