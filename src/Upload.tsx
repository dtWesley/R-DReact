import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Upload() {
  const [filebase64, setFileBase64] = useState<string>("");

  function formSubmit(e: any) {
    e.preventDefault();
    console.log({ filebase64 });
  }

  function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  }

  return (
    <div className="App container">
      <li>
        <NavLink to="/">Back</NavLink>
      </li>
      <header className="App-header">
        Choose an image to to upload
        <form onSubmit={formSubmit}>
          <input type="file" onChange={(e) => convertFile(e.target.files)} />
          <hr />
          {filebase64 && (
            <>
              <p>It's ready to be submitted!</p>

              {/* if it's an image */}
              {filebase64.indexOf("image/") > -1 && (
                <img src={filebase64} width={300} />
              )}

              {/* if it's a video */}
              {filebase64.indexOf("video/") > -1 && (
                <video controls>
                  <source src={filebase64} />
                </video>
              )}

              {/* if it's a audio (music, sound) */}
              {filebase64.indexOf("audio/") > -1 && (
                <audio controls>
                  <source src={filebase64} />
                </audio>
              )}

              {/* if it's a PDF */}
              {filebase64.indexOf("application/pdf") > -1 && (
                <embed src={filebase64} width="800px" height="2100px" />
              )}

              <hr />
              <button> Submit and check the console</button>
            </>
          )}
        </form>
      </header>
    </div>
  );
}

export default Upload;
