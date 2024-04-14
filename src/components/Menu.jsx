import React from "react";
import DishesCard from "../layouts/DishesCard";
import PotliKabab from "../attachments/Potli_Kabab.jpg"
import SezTanduri from "../attachments/Sez_tanduri.jpg"
import MurgMusallam from "../attachments/Murg_Musallam.jpg"
import TirangaKepsa from "../attachments/Tiranga_Kepsa.jpg"

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 pt-16">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10 text-brightColor">
        Recommended Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={MurgMusallam} title="MurgMusallam"/>
        <DishesCard img={TirangaKepsa} title="Tiranga Kepsa"/>
        <DishesCard img={SezTanduri} title="Sez Tanduri"/>
        <DishesCard img={PotliKabab} title="Potli Kebab"/>
      </div>
    </div>
  );
};

export default Menu;
