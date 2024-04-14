import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-brightColor rounded-t-3xl mt-8 md:mt-0 text-whiteColor">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Afzal Mao</h1>
          <p className=" text-sm">
          Afzal Mao, redefining the culinary space since 1920
          </p>
          <br></br>
          <p className=" text-sm">
          A journey of flavours and cuisines started in 1920
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-whiteColor transition-all cursor-pointer"
              href="/"
            >
              Home
            </a>
            <a
              className=" hover:text-whiteColor transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className=" hover:text-whiteColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className=" hover:text-whiteColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Dishes</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-whiteColor transition-all cursor-pointer"
              href="/"
            >
              Popular Dishes
            </a>
            <a
              className=" hover:text-whiteColor transition-all cursor-pointer"
              href="/"
            >
              Recommended Dishes
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-whiteColor transition-all cursor-pointer"
              href="/"
            >
              AfzalMao@email.com
            </a>
            <a
              className=" hover:text-whiteColor transition-all cursor-pointer"
              href="/"
            >
              +91 9876543210
            </a>
            <a
              className=" hover:text-whiteColor transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-whiteColor"> <b>Afzal Mao</b></span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
