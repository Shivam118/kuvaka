"use client";
import Image from "next/image";
import React from "react";
import { PiDesktopLight } from "react-icons/pi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ({ tabType, open, close }) => {
  return (
    <div
      className={`w-screen h-screen absolute t-0 l-0 flex items-center justify-center bg-black bg-opacity-80 ${
        open ? "block" : "hidden"
      } z-[10]
      `}
    >
      <div className="border-2 rounded-3xl border-dashed border-[#f4f4f4] md:w-[640px] w-[200px] md:h-[418px] h-[525px] flex flex-col justify-center items-center bg-[#111] relative">
        <span
          className="absolute text-3xl text-[#F4F4F4] top-5 right-5 cursor-pointer"
          onClick={() => close(false)}
        >
          <IoMdCloseCircleOutline />
        </span>
        <h1 className="text-[20px] md:text-[28px]">Upload File From</h1>
        <div className="flex flex-col md:flex-row justify-between items-center w-96 mt-12 gap-4">
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <div className="w-[160px] h-[120px] bg-[#1E1E1E] rounded-xl flex items-center justify-center">
              <Image
                src="/assets/images/decrackle.png"
                width={30}
                height={30}
                sizes={"100vw"}
                alt={"Decrackle"}
              />
            </div>
            <span className="text-[20px] mt-2">Folder</span>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <div className="w-[160px] h-[120px] bg-[#1E1E1E] rounded-xl flex items-center justify-center text-5xl">
              <PiDesktopLight />
            </div>
            <span className="text-[20px] mt-2">My Desktop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
