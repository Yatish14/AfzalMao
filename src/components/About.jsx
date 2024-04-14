import React from "react";
import Tiranga from "../attachments/Tiranga.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 ">
      <img src={Tiranga} alt="img" style={{width: "100%", height: 250, borderRadius: "0.75rem", backgroundColor: "#f6f2ea", margin: "1.5rem"}}/>

      <div className=" space-y-4 lg:p-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start text-brightColor">
          About Us
        </h1>
        <p>
          With a humble beginning in 1920 as a small Cafe, Afzal Mao has come a
          long way in creating a niche for itself. From bringing different
          cuisines to being the pioneers of their signature dish ‘Kepsa,’ Afzal
          Mao is a place where you can be sure of experiencing authentic
          flavours of different cuisines.
        </p>
        <p>
          Nestled in the hustling city of Mumbai, Afzal Mao is not just a
          restaurant but a legacy that has been nurturing authentic flavours for
          generations.
        </p>
        <p>
        Afzal Mao is a journey of flavours and cuisines started in 1920
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
