import Link from "next/link";
import React from "react";
import { CgTranscript } from "react-icons/cg";

const Transcript = ({ open }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed rounded-xl text-[#E0DDD6] gap-12 md:py-12 md:px-20 py-10 px-4">
      <h2 className="text-xl">Transcription</h2>
      <span className="text-5xl">
        <CgTranscript />
      </span>
      <div className="w-full flex flex-col items-center justify-center">
        <button
          className="w-[200px] md:w-[391px] h-[54px] rounded-full bg-gradient-to-b from-[#BAEF58] to-[#79B509] text-black flex flex-row items-center justify-center text-xs md:text-base"
          onClick={() => open(true)}
        >
          Start Transcription
          <span className="pl-1 md:pl-2 text-base md:text-xl">
            <CgTranscript />
          </span>
        </button>
        <span className="text-sm mt-2">Or drag here</span>
      </div>
      <li className="text-sm list-style-disc">Audio and Video file only</li>
      <Link href="/home" className="text-sm md:text-base underline text-center">
        View Recently Transcription Files
      </Link>
    </div>
  );
};

export default Transcript;
