"use client";
import React, { useState } from "react";
import { IoQrCode } from "react-icons/io5";
import { FaGlobe, FaAmazon, FaFacebookF, FaShareSquare } from "react-icons/fa";
import {
  RiUserShared2Fill,
  RiShoppingBag3Line,
  RiTwitterXFill,
  RiLinksFill,
} from "react-icons/ri";
import { HiSave } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
import { LuInstagram, LuLinkedin, LuFigma } from "react-icons/lu";
import { TbDirectionSignFilled } from "react-icons/tb";
import { MdPhonelinkRing } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { RxNotionLogo } from "react-icons/rx";
import { FiYoutube } from "react-icons/fi";
import { SiTrustpilot, SiSwiggy, SiFlipkart, SiZomato } from "react-icons/si";
import foot from "./human-footprints.png";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import SwipeableTemporaryDrawer from "./components/drawer";
export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div className="flex h-full w-full justify-center bg-gray-400 overflow-y-scroll">
      <div className="absolute drawer w-full justify-end flex">{isDrawerOpen ? <SwipeableTemporaryDrawer /> : null}</div>

      <div className="flex h-full  max-w-[max-content] bg-gray-200 flex-col gap-y-2 px-3 py-2 ">
        <div className="head w-fill  mt-5 mb-5  flex flex-col  items-center ">
          <div
            className="rounded-full bg-white w-max-content w-40"
            onClick={handleImageClick}>
            <Image
              className="h-40  hover:cursor-pointer rounded-full border-2 border-gray-400"
              src={foot}
              alt="foot-logo"/>
          </div>
          <div className="flex items-center gap-x-1">
            <h2 className=" mt-5 font-extrabold text-2xl">Foot Prints</h2>
            <div className="rounded-full bg-purple-500 p-1 text-white font-bold mt-5">
              <IoCheckmark size={11} />
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlay  z-10" onClick={handleCloseModal}>
            <div className="modal-content">
              <Image className="rounded-full " src={foot} alt="foot-logo" />
            </div>
          </div>
        )}
        <div className="grid grid-cols-3 gap-x-2">
          <div className="flex items-center border-2 gap-x-5 rounded-2xl  border-gray-300 justify-center  bg-white px-2 py-2">
            <div className="flex md:gap-x-10 gap-x-4 md:scale-125 items-center">
              <div className="w-fit md:scale-125 items-center h-fit p-1.5 bg-orange-100 rounded-md">
                <IoQrCode size={15} className="fon" />
              </div>
              <div className="">
                <span className="font-semibold">6477</span>
                <h1 className="text-gray-400 whitespace-nowrap font-medium">
                  Scans
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center border-2 gap-x-5 rounded-2xl  border-gray-300 justify-center  bg-white px-2 py-2">
            <div className="flex md:gap-x-10 gap-x-4 md:scale-125 items-center">
              <div className="w-fit md:scale-125 items-center h-fit p-1.5 bg-orange-100 rounded-md">
                <RiUserShared2Fill size={15} className="fon" />
              </div>
              <div className="">
                <span className="font-semibold">6477</span>
                <h1 className="text-gray-400 whitespace-nowrap font-medium">
                  Scans
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center border-2 gap-x-5 rounded-2xl  border-gray-300 justify-center  bg-white px-2 py-2">
            <div className="flex md:gap-x-10 gap-x-4 md:scale-125 items-center">
              <div className="w-fit md:scale-125 items-center h-fit p-1.5 bg-orange-100 rounded-md">
                <HiSave size={15} className="fon" />
              </div>
              <div className="">
                <span className="font-semibold">6477</span>
                <h1 className="text-gray-400 whitespace-nowrap font-medium">
                  Saved
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="Middle-Head m-4 space-y-3">
          <h1 className="text-gray-600 font-bold text-lg">Reach To Us </h1>
          <div className="r-1 flex flex-wrap gap-3 m-1 pb-5">
            <div className="w-[115px] border-2 items-center pl-2 pt-2 pb-2 pr-3 rounded-2xl bg-white flex justify-between">
              <FaGlobe size={18} />
              <a
                href="https://www.website.com/"
                target="_blank"
                className="font-medium"
              >
                Website
              </a>
            </div>
            <div className="w-[85px] border-2 items-center pl-2 pr-3 rounded-2xl bg-white flex justify-between">
              <RiShoppingBag3Line />
              <a
                href="https://www.shop.com/"
                target="_blank"
                className="font-medium"
              >
                Shop
              </a>
            </div>
            <div className="w-[90px] border-2 items-center pl-2 pr-3 rounded-2xl bg-white flex justify-between">
              <MdPhonelinkRing />
              <a href="tel:+1234567890" target="_blank" className="font-medium">
                Phone
              </a>
            </div>
            <div className="w-[115px] border-2 items-center pl-2 pr-3 rounded-2xl bg-white flex justify-between">
              <TbDirectionSignFilled />
              <a
                href="https://www.googlemaps.com/"
                target="_blank"
                className="font-medium"
              >
                Direction
              </a>
            </div>
            <div className="w-[85px] border-2 items-center p-2 pr-3 rounded-2xl bg-white flex justify-between">
              <CgMail />
              <a
                href="mailto:your.email@example.com"
                target="_blank"
                className="font-medium"
              >
                Email
              </a>
            </div>
          </div>
          <a className="text-gray-600 font-bold text-lg">Join Us </a>
          <div className="r-1 flex flex-wrap gap-3 m-1 pb-5">
            <div className="w-[110px]  border-2 items-center p-2  pr-3 rounded-2xl bg-white flex justify-between">
              <FiYoutube />
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="font-medium"
              >
                Youtube
              </a>
            </div>
            <div className="w-[120px] border-2 items-center p-2 pr-3 gap-x-1 rounded-2xl bg-white flex justify-between">
              <LuInstagram />
              <a className="font-medium">Instagram</a>
            </div>
            <div className="w-[95px] border-2 items-center p-2 pr-3 rounded-2xl bg-white flex justify-between">
              <RiTwitterXFill />
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="font-medium"
              >
                Twitter
              </a>
            </div>
            <div className="w-[110px] border-2 items-center p-2 pr-3 rounded-2xl bg-white flex justify-between">
              <LuLinkedin />
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="font-medium"
              >
                LinkedIn
              </a>
            </div>
            <div className="w-[120px] border-2 items-center p-2 pr-3 rounded-2xl bg-white flex justify-between">
              <FaFacebookF />
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="font-medium"
              >
                Facebook
              </a>
            </div>
          </div>
          <a className="text-gray-600 font-bold text-lg">What People Say </a>
          <div className="r-1 flex flex-wrap gap-3 m-1 mt-2 pb-5">
            <div className="w-[105px] border-2 items-center p-2 pr-3 rounded-2xl bg-white flex justify-between">
              <FcGoogle />
              <a
                href="https://www.google.com/"
                target="_blank"
                className="font-medium"
              >
                Google
              </a>
            </div>
            <div className="w-[110px] border-2 items-center p-2 pr-3 rounded-2xl bg-white flex justify-between">
              <SiTrustpilot />
              <a
                href="https://www.trustpilot.com/"
                target="_blank"
                className="font-medium"
              >
                Trustpilot
              </a>
            </div>
          </div>
          <h1 className="text-gray-600 font-bold text-lg">Where To Buy </h1>
          <div className="r-1 flex flex-wrap gap-3 m-1 pb-5">
            <div className="w-[120px] border-2 items-center p-2 pr-3 rounded-2xl bg-white flex justify-between">
              <SiZomato size={30} />
              <a
                href="https://www.zomato.com/"
                target="_blank"
                className="font-medium"
              >
                Zomato
              </a>
            </div>
            <div className="w-[100px] pr-3 border-2 items-center p-2 rounded-2xl bg-white flex justify-between">
              <SiSwiggy />
              <a
                href="https://www.swiggy.com"
                target="_blank"
                className="font-medium"
              >
                Swiggy
              </a>
            </div>
            <div className="w-[105px] pr-3 border-2 items-center p-2 rounded-2xl bg-white flex justify-between">
              <SiFlipkart />
              <a
                href="https://www.flipkart.com/"
                target="_blank"
                className="font-medium"
              >
                Flipkart
              </a>
            </div>
            <div className="w-[120px] border-2 items-center p-2 rounded-2xl pr-4 bg-white flex justify-between">
              <FaAmazon size={20} />
              <a
                href="https://www.amazon.in/"
                target="_blank"
                className="font-medium"
              >
                Amazon
              </a>
            </div>
          </div>
          <h1 className="text-gray-600 font-bold text-lg">Others</h1>
          <div className="r-1 flex flex-wrap gap-3 m-1 pb-5">
            <div className="w-[100px] pr-3 border-2 items-center p-2 rounded-2xl bg-white flex justify-between">
              <RxNotionLogo />
              <a
                href="https://www.notion.com/"
                target="_blank"
                className="font-medium"
              >
                Notion
              </a>
            </div>
            <div className=" border-2 w-[100px] pr-4 items-center p-2 rounded-2xl bg-white flex justify-between">
              <LuFigma />
              <a
                href="https://www.figma.com/"
                target="_blank"
                className="font-medium"
              >
                Figma
              </a>
            </div>
            <div className="w-[100px] pr-3 border-2 items-center p-2 rounded-2xl bg-white flex justify-between">
              <RiLinksFill />
              <a className="font-medium">Others</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
