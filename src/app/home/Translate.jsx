import React from "react";
import { BsTranslate } from "react-icons/bs";

const Translate = ({ open }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed rounded-xl text-[#E0DDD6] gap-12 md:p-20 py-10 px-4">
      <h2 className="text-xl">Translation</h2>
      <span className="text-5xl">
        <BsTranslate />
      </span>
      <div className="w-full flex flex-col items-center justify-center">
        <button
          className="w-[180px] md:w-[391px] h-[54px] rounded-full bg-gradient-to-b from-[#BAEF58] to-[#79B509] text-black flex flex-row items-center justify-center text-xs md:text-base"
          onClick={() => open(true)}
        >
          Start Translation
          <span className="pl-2 text-xl">
            <BsTranslate />
          </span>
        </button>
        <span className="text-sm mt-2">Or drag here</span>
      </div>
      <li className="text-sm list-style-disc">Audio and Video file only</li>
    </div>
  );
};

export default Translate;
