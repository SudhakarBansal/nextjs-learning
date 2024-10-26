"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ name }) {
  const pickImage = useRef();
  const [pickedImage, setPickedImage] = useState();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null); // Reset pickedImage state if no file is selected
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result); // Set the base64 image URL
    };

    fileReader.readAsDataURL(file);
  };

  const handlePickImage = () => {
    pickImage.current.click();
  };

  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="hidden text-lg font-medium dark:text-gray-200 text-gray-700"
      >
        Image Picker
      </label>
      <div className="flex items-center justify-center sm:justify-start flex-wrap-reverse">
        <button
          type="button"
          onClick={handlePickImage}
          className="bg-gray-300 dark:text-black text-white py-2 px-5 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 w-full sm:w-auto"
        >
          Pick an Image
        </button>
        <div className="w-40 h-40 m-5 sm:ml-10 relative flex items-center justify-center rounded-lg border border-gray-300 shadow-md overflow-hidden">
          {!pickedImage ? (
            <p className="text-sm text-gray-500">No image selected</p>
          ) : (
            <Image
              src={pickedImage}
              alt="Selected Image"
              fill
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/*"
          className="hidden"
          ref={pickImage}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}
