import React from "react";
import Link from "next/link";
import { PiFileAudio } from "react-icons/pi";
import { PiMagicWand } from "react-icons/pi";

const Speech = ({ open }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed rounded-xl text-[#E0DDD6] gap-12 md:py-12 md:px-20 py-10 px-4">
      <h2 className="text-xl text-center">Speech Enhancement</h2>
      <span className="text-5xl">
        <PiFileAudio />
      </span>
      <div className="w-full flex flex-col items-center justify-center">
        <button
          className="w-[200px] md:w-[391px] h-[54px] rounded-full bg-gradient-to-b from-[#BAEF58] to-[#79B509] text-black flex flex-row items-center justify-center md:text-base text-xs"
          onClick={() => open(true)}
        >
          Start Speech Enhancement
          <span className=" pl-1 md:pl-2 text-base md:text-xl">
            <PiMagicWand />
          </span>
        </button>
        <span className="text-sm mt-2">Or drag here</span>
      </div>
      <li className="text-sm list-style-disc">Audio and Video file only</li>
      <Link href="/home" className="text-xs md:text-base underline text-center">
        View Recently Speech Enhancement Files
      </Link>
    </div>
  );
};

export default Speech;
