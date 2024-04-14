import React from "react";
import DishesCard from "../layouts/DishesCard";
import ChickenKepsa from "../attachments/Chicken_Kepsa.jpg"
import ButterChicken from "../attachments/Butter_Chicken.jpg"
import BegumBahar from "../attachments/Begum_Bahar.jpg"
import MurgMusallam from "../attachments/Murg_Musallam.jpg"
import CrispyChicken from "../attachments/Crispy_Chicken.jpg"
import TripleSezRice from "../attachments/Triple_sez_rice.jpg"

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10 text-brightColor">
        Popular Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={ChickenKepsa} title="Chicken Kepsa"  />
        <DishesCard img={ButterChicken} title="Butter Chicken" price="$12.99" />
        <DishesCard img={CrispyChicken} title="Crispy Chicken" price="$10.99" />
        <DishesCard img={BegumBahar} title="Begum bahar" price="$11.99" />
        <DishesCard img={TripleSezRice} title="Triple sez rice" price="$10.99" />
        <DishesCard img={MurgMusallam} title="Murgmusallam" price="$12.99" />
      </div>
    </div>
  );
};

export default Dishes;
