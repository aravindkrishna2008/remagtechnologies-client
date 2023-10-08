"use client";

import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import AuthOptions from "./components/AuthOptions";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const [file, setFile] = useState();
  const router = useRouter();

  const uploadFile = (e, n) => {
    console.log("hi");

    if (e > 1) {
      setFile(e.target.files[-1]);
    } else {
      setFile(e.target.files[0]);
    }
    // setFile(e.target.files[0]);
    console.log(n);
    // console.log(file.name);
  };

  const processFile = async () => {
    // send new form data with file to http://f278-73-170-22-163.ngrok-free.app/upload-image
    console.log(file);
    const formData = new FormData();
    formData.append("image", file);
    console.log(formData);
    const res = await axios.post(
      "http://f278-73-170-22-163.ngrok-free.app/upload-image",
      formData
    );
    router.push(`/result`, {
      query: res.data
    })
  };

  const content = file ? (
    <p className="italic text-[#ABABAB] mt-5 tracking-[2px] text-[1.2vw]">
      {file.name}
    </p>
  ) : (
    <p className="italic text-[#ABABAB] mt-5 tracking-[2px] text-[1.2vw]">
      or drop a file
    </p>
  );

  const uploadButton = file ? (
    <>
      <button
        className="btn text-[1.2vw] hover:bg-blue-800 transition-all duration-200 bg-[#3C77F7] px-[1.5vw] p-[1vw] flex items-center justify-center text-[#E6E6E6] cursor-pointer"
        htmlFor="actual-btn"
        onClick={async () => {
          await processFile();
        }}
      >
        Process Now!
      </button>
    </>
  ) : (
    <>
      <input
        onChange={(e) => uploadFile(e, "input")}
        type="file"
        id="actual-btn"
        hidden
      />
      <label
        className="btn text-[1.2vw] bg-[#3C77F7] px-[1.5vw] p-[1vw] flex items-center justify-center text-[#E6E6E6] cursor-pointer"
        htmlFor="actual-btn"
      >
        Choose File
      </label>
    </>
  );

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className=" p-[4.722vw] r">
      <div className="text-white flex font-bold text-[1.5vw] items-center justify-between flex-row">
        <Image
          src="/logo.png"
          width={10000}
          height={10000}
          className="w-[20vw]"
        />
        <div className="flex flex-row items-center justify-center gap-8">
          <AuthOptions />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[3vh]">
        <h1 className="title text-[4vw] leading-[4.2vw] flex items-center justify-center font-bold text-center p-4 w-[55vw]">
          Upload a reconnection graph for analysis.
        </h1>
        <div
          className="w-[20vw] h-[20vw] flex flex-col items-center justify-center mt-[3vh] rounded-[27px] font-bold"
          style={{ border: "1px dashed rgba(255, 255, 255, 0.35)" }}
        >
          <img src="/Subtract.png" className="w-[45%]" />
          {uploadButton}
        </div>
        {/* if file is there change text to file name */}
        {content}
        {/* <p className="italic text-[#ABABAB] mt-5 tracking-[2px] text-[1.2vw]">
          or drop a file
        </p> */}
      </div>
      <img
        src="/shapes-right.png"
        className="absolute top-[36%] left-[15%] w-[250px]"
      />
      <img
        src="/shapes-left.png"
        className="absolute top-[36%] right-[15%] w-[200px]"
      />{" "}
    </div>
  );
}
