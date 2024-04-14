import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat text-whiteColor">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className="  font-semibold text-6xl">
        Afzal Mao, redefining the culinary space since 1920
        </h1>
        <p className="">
        Explore and experience a culinary journey that satiates your taste buds and soothes your soul. 

        </p>
        <div >
          <Button title="Order Now"  />
        </div>
      </div>
    </div>
  );
};

export default Home;
