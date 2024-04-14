import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import AfzalLogoLong from "../attachments/Logo-no-bg.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full z-10">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <img
              src={AfzalLogoLong}
              alt="AfzalMaoLogo"
              className="h-10 md:h-12  scale-175 md:scale-150"
            />
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="youtubeblogs"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Blogs
            </Link>

            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Dishes
                </Link>

                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Popular
                  </Link>
                </li>
                <li>
                  <Link
                    to="recommended"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Recommended
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>

            <Link
              to="contactus"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Contact
            </Link>

            <Button title="Login" />
          </nav>

          <div className="md:hidden flex items-center text-brightColor">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-brightColor text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-screen transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            to="youtubeblogs"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blogs
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Dishes
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>
          <Link
            to="contactus"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Contact
          </Link>

          <Link
            to=""
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
