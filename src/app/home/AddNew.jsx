import React from "react";
import { GrDocumentUpload } from "react-icons/gr";
import { BiUpload } from "react-icons/bi";

const AddNew = ({ open }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed rounded-xl text-[#E0DDD6] gap-12 md:p-20 py-10 px-8">
      <span className="text-5xl">
        <GrDocumentUpload />
      </span>
      <button
        className="w-[180px] md:w-[391px] h-[54px] rounded-full bg-gradient-to-b from-[#BAEF58] to-[#79B509] text-black flex flex-row items-center justify-center text-xs md:text-base"
        onClick={() => open(true)}
      >
        Upload The File
        <span className="pl-2 text-xl">
          <BiUpload />
        </span>
      </button>
      <li className="text-sm list-style-disc">Audio and Video file only</li>
    </div>
  );
};

export default AddNew;
