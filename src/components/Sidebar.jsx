import React, { useRef } from "react";

export default function Sidebar({ onImageUpload }) {
  //Reference for file input element
  const fileInputRef = useRef(null);

  function handleImageClick() {
    // Trigger the click event on the file input element
    fileInputRef.current.click();
  }

  function handleFileChange(event) {
    //Get the selected file
    const file = event.target.files[0];

    //Process the file and send it to the parent component
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageUpload(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="sidebar--tools">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <img
        className="sidebar--imageupload"
        src="https://w7.pngwing.com/pngs/542/552/png-transparent-font-awesome-upload-font-cloud-miscellaneous-cloud-logo.png"
        alt="GRRR"
        onClick={handleImageClick}
      />
      <p>Upload Your Own Image</p>
    </div>
  );
}
