import { useState } from 'react';

import './App.css';

import Dropzone from './componets/dropzone';
import Button from './componets/Button';
import Image from './componets/Image';

import axios from "./utils/axios"
import Header from './componets/Header';
import Video from './componets/Video';
import Loader from './componets/Loader';
import Collection from './componets/Collection';

function App() {
  const [file, setFile] = useState(null);
  const [fileBase64, setFileBase64] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState("home");

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file.type.startsWith("image/")) {
      return alert("Please select an image file");
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        const base64 = reader.result;
        setFileBase64(base64);
      }
    };

    reader.readAsDataURL(file);
    setFile(acceptedFiles[0])
  }

  const handleConvertToVideo = async () => {

    const formData = new FormData();
    formData.append("file", file);
    formData.append("text", "test");

    setLoading(true);
    const response = await axios.post("/attachments/convert-to-video", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status !== 200) return alert("Something went wrong");
    setVideoUrl(response.data.videoUrl)
    setLoading(false);
  }
  
  return (
    <div className="App">

      <Header setMenu={setMenu} />

      {menu === "home" && <>
        {!file && <Dropzone handleDrop={handleDrop} file={file} setFile={setFile} />}

        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, height: file ? "100%" : "auto" }}>
          <div>
            {fileBase64 && file &&
              <div>
                <Image
                  imageSrc={fileBase64}
                  imageName={file.name}
                />
              </div>}

            {file &&
              <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", gap: 10 }}>
                <div>
                  <Button title="Remove"
                    onClick={() => {
                      setFile(null)
                      setVideoUrl(null)
                      setFileBase64(null)
                    }}
                    disabled={loading}
                    style={{ backgroundColor: "#e34d4d" }}
                  />
                </div>
                <div>
                  <Button title="Convert to video"
                    onClick={handleConvertToVideo}
                    disabled={loading}
                    style={{ backgroundColor: "#4d68e3" }}
                  />
                </div>
              </div>
            }
          </div>

          {videoUrl && <>
            <div>
              <h1>➡️</h1>
            </div>

            <div style={{ margin: "auto", display: "flex", justifyContent: "center", gap: 10 }}>
              <Video videoUrl={videoUrl} />
            </div>
          </>}

          {loading && <div >
            <Loader />
            <p>Generating video...</p>
          </div>}
        </div>
      </>}

      {menu === "collection" && <>
        <Collection />
      </>}
    </div>
  );
}

export default App;
