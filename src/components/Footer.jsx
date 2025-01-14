import React from "react";
import logo from "../assets/Logo.jpg";
import { RiFacebookCircleLine } from "@remixicon/react";
import { RiInstagramLine } from "@remixicon/react";
import { RiTwitterLine } from "@remixicon/react";
import { RiYoutubeLine } from "@remixicon/react";
import { RiVisaLine } from "@remixicon/react";
import { RiMastercardLine } from "@remixicon/react";
import { RiPaypalLine } from "@remixicon/react";

const Footer = () => {
  return (
    <>
      <div className="bg-primary h-[60vh] flex justify-center items-center px-20 py-20 text-white mt-20">
        <div className="h-full w-1/3">
          <img src={logo} alt="" className="h-[15vh] mb-10 cursor-pointer" />
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            assumenda beatae quam quidem excepturi minus maiores ullam tempora
            optio veritatis, eum omnis saepe, eveniet modi praesentium neque?
            Nam, nobis accusamus?
          </p>
          <div className="flex items-center gap-4 mt-10">
            <button>
              <RiFacebookCircleLine
                size={32}
                className="hover:text-primary-light"
              />
            </button>
            <button>
              <RiInstagramLine size={32} className="hover:text-primary-light" />
            </button>
            <button>
              <RiTwitterLine size={32} className="hover:text-primary-light" />
            </button>
            <button>
              <RiYoutubeLine size={32} className="hover:text-primary-light" />
            </button>
          </div>
        </div>
        <div className="h-full w-2/3 flex justify-between items-start px-20">
          <div className="w-1/3 h-full flex flex-col gap-5">
            <h1 className="text-2xl mb-8">Column One</h1>
            <p className="cursor-pointer hover:text-primary-light">
              One option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              two option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              Three option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              Four option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              five option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              Six Option
            </p>
          </div>
          <div className="w-1/3 h-full flex flex-col gap-5">
            <h1 className="text-2xl mb-8">Column Two</h1>
            <p className="cursor-pointer hover:text-primary-light">
              One option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              two option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              Three option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              Four option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              five option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              Six Option
            </p>
          </div>
          <div className="w-1/3 h-full flex flex-col gap-5">
            <h1 className="text-2xl mb-8">Column Three</h1>
            <p className="cursor-pointer hover:text-primary-light">
              One option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              two option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              Three option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              Four option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              five option
            </p>
            <p className="cursor-pointer hover:text-primary-light">
              Six Option
            </p>
          </div>
        </div>
      </div>
      
      <hr className="text-primary-light font-thin" />
      
      <div className="bg-primary px-20 py-6 text-white h-[5vh] flex justify-between items-center">
        <h1>Copyright 2025 Terrfic Bites. All rights Reserved</h1>
        <div className="flex gap-14">
          <button className="bg-white px-2 rounded-lg hover:bg-primary-light">
            <RiVisaLine
              size={32}
              className="text-primary"
            />
          </button>
          <button className="bg-white px-2 rounded-lg hover:bg-primary-light">
            <RiMastercardLine size={32} className="text-primary" />
          </button>
          <button className="bg-white px-2 rounded-lg hover:bg-primary-light">
            <RiPaypalLine size={32} className="text-primary" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
