import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";
import { useState } from "react";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free" // Get production API keys from Upload.io
});

// Configuration options: https://upload.io/uploader#customize
const options = { multi: true };

const MyApp = ({photo,setPhoto}) => {
    return(
        <>
        <UploadDropzone uploader={uploader}
        options={options}
        onUpdate={files => setPhoto(files.map(x => x.fileUrl).join("\n")) }
        width="530px"
        height="300px" />
        <div>{photo}</div>
        </>
  
   
)};

export default MyApp