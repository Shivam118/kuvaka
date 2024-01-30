"use client";
import Image from "next/image";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { PiMagicWand, PiFolderOpenDuotone } from "react-icons/pi";
import { CgTranscript } from "react-icons/cg";
import { BsTranslate } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import AddNew from "./AddNew";
import Speech from "./Speech";
import Transcript from "./Transcript";
import Translate from "./Translate";
import Folders from "./Folders";
import Modal from "./Modal";

export default function Page() {
  const [activeTab, setActiveTab] = React.useState("add-new");
  const [open, setOpen] = React.useState(false);

  const activeTabComponent = () => {
    switch (activeTab) {
      case "add-new":
        return <AddNew open={setOpen} />;
      case "speech":
        return <Speech open={setOpen} />;
      case "transcript":
        return <Transcript open={setOpen} />;
      case "translate":
        return <Translate open={setOpen} />;
      case "folders":
        return <Folders open={setOpen} />;
      default:
        return <AddNew open={setOpen} />;
    }
  };

  return (
    <div className="w-screen h-screen bg-black text-[#f4f4f4] flex flex-row justify-between">
      <Modal tabType={activeTab} open={open} close={setOpen} />
      <div className="w-1/6 md:w-1/5 h-full border border-[#5A5A5A] bg-[#1E1E1E] overflow-hidden">
        <h2 className="text-base md:text-3xl flex flex-row items-center px-4 py-6">
          <span className="pr-1">
            <Image
              src="/assets/images/decrackle.png"
              alt="decrackle"
              width={25}
              height={40}
            />
          </span>
          <span className="hidden md:block">Decrackle</span>
        </h2>
        <ul className="md:text-xl h-2/3 w-full flex flex-col items-start justify-between mt-12">
          <li
            className={`h-[50px] flex flex-row items-center w-full pl-3 md:pl-2 cursor-pointer ${
              activeTab === "add-new"
                ? "text-[#baef58] border-l-2 border-[#baef58]"
                : ""
            } `}
            onClick={() => setActiveTab("add-new")}
          >
            <span className="pr-2 text-xl md:text-2xl">
              <IoMdAddCircleOutline />
            </span>
            <span className="hidden md:block">Add New</span>
          </li>
          <li
            className={`h-[50px] flex flex-row items-center w-full pl-3 md:pl-2 cursor-pointer ${
              activeTab === "speech"
                ? "text-[#baef58] border-l-2 border-[#baef58]"
                : ""
            } `}
            onClick={() => setActiveTab("speech")}
          >
            <span className="pr-2 text-xl md:text-2xl">
              <PiMagicWand />
            </span>
            <span className="hidden md:block">Speech Enhancement</span>
          </li>
          <li
            className={`h-[50px] flex flex-row items-center w-full pl-3 md:pl-2 cursor-pointer ${
              activeTab === "transcript"
                ? "text-[#baef58] border-l-2 border-[#baef58]"
                : ""
            } `}
            onClick={() => setActiveTab("transcript")}
          >
            <span className="pr-2 text-xl md:text-2xl">
              <CgTranscript />
            </span>
            <span className="hidden md:block">Transcription</span>
          </li>
          <li
            className={`h-[50px] flex flex-row items-center w-full pl-3 md:pl-2 cursor-pointer ${
              activeTab === "translate"
                ? "text-[#baef58] border-l-2 border-[#baef58]"
                : ""
            } `}
            onClick={() => setActiveTab("translate")}
          >
            <span className="pr-2 text-xl md:text-2xl">
              <BsTranslate />
            </span>
            <span className="hidden md:block">Translation</span>
          </li>
          <li
            className={`h-[50px] flex flex-row items-center w-full pl-3 md:pl-2 cursor-pointer ${
              activeTab === "folders"
                ? "text-[#baef58] border-l-2 border-[#baef58]"
                : ""
            } `}
            onClick={() => setActiveTab("folders")}
          >
            <span className="pr-2 text-xl md:text-2xl">
              <PiFolderOpenDuotone />
            </span>
            <span className="hidden md:block">Folders</span>
          </li>
        </ul>
      </div>
      <div className="w-5/6 md:w-4/5 h-full relative flex flex-col items-center justify-between z-[1]">
        <nav className="w-full h-[100px] flex flex-row justify-end items-center text-xs md:text-[18px] md:pr-12 px-2">
          <ul className="w-full flex flex-row justify-between items-center md:w-[450px]">
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">How to Use</li>
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Plans</li>
            <li className="cursor-pointer text-xl md:text-3xl">
              <RxAvatar />
            </li>
          </ul>
        </nav>
        <section className="flex flex-col w-full h-8/12 flex items-center justify-center z-[1]">
          {activeTabComponent()}
        </section>
        <footer className="h-[58px] bg-[#5a5a5a] text-[#F4F4F4] border border-[#5A5A5A] flex items-center justify-center text-xs md:text-lg w-full py-2">
          <ul className="flex flex-row justify-between items-center md:w-[700px] w-[320px]">
            <li className="pr-1 text-center">Copyright © 2023 Decrackle</li>
            <li className="pr-1 text-center">Terms of service</li>
            <li className="pr-1 text-center">Privacy Policy</li>
            <li className="pr-1 text-center">Cookie Policy</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
