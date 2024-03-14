import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

const BASE_URL_END_POINT = "http://localhost:8000/product/getAllProduct"

const AddProductImage: React.FC = () => {
  const [file, setFile] = useState<File | undefined>();
  const [caption, setCaption] = useState<string>("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("caption", caption);
      
      try {
        await axios.post(BASE_URL_END_POINT, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("Image uploaded successfully");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.error("No file selected.");
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        onChange={handleFileChange}
        type="file"
        accept="image/*"
        required
      ></input>
      <input
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        type="text"
        placeholder="Caption"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProductImage;
