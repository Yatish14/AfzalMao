 //   <div className="w-full lg:w-2/3 space-y-5">
    //     <h1 className="font-semibold text-6xl">
    //       Afzal Mao, redefining the culinary space since 1920
    //     </h1>
    //     <p className="">
    //       Explore and experience a culinary journey that satiates your taste buds and soothes your soul.
    //     </p>
    //     <div>
    //       <Button title="Order Now" />
    //     </div>
    //   </div>
    //   {/* <div className="w-full lg:w-1/3 h-full"> */}
    // <Slider
    //   {...settings}
    //   className="h-full min-h-screen flex flex-col justify-center lg:px-32 px-5 "
    // >



    import React, { useState } from "react";
import Button from "../layouts/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ className, onClick }) => (
  <button
    className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2`}
    onClick={onClick}
  >
    Previous
  </button>
);

const CustomNextArrow = ({ className, onClick }) => (
  <button
    className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2`}
    onClick={onClick}
  >
    Next
  </button>
);

const Home = () => {
  const [autoplay, setAutoplay] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 5000,
    beforeChange: () => {
      setAutoplay(false);
    },
    afterChange: () => {
      setAutoplay(true);
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <Slider
        {...settings}
        className=" h-screen flex flex-col justify-center lg:px-32 px-5 pt-32"
      >
        <div className="h-screen">
          <iframe
            title="video1"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IpCSViv4WX4?si=aRxs4yU8NA3W02gM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="h-screen">
          <iframe
            title="video2"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/MqzaBXnOpOw?si=ZjIF3IJ7OzTL0haP"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="h-screen">
          <iframe
            title="video3"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DnsUB-bHq80?si=l9VsCbe5thY6MWvO"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Slider>
      <style>
        {`
          .slick-dots {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            z-index: 1;
          }

          .slick-dots li {
            margin: 0 4px;
            display: inline-block;
          }

          .slick-dots button {
            font-size: 10px;
            line-height: 1;
            color: #fff;
            opacity: 0.5;
            cursor: pointer;
            transition: opacity 0.3s;
           
            border: none;
            outline: none;
          }

          .slick-dots button:hover,
          .slick-dots button.slick-active {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};

export default Home;
