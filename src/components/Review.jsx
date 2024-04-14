import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  var Customer_Reviews = {
    ChickenKepsa:
      "Delicious <b>Chicken Kepsa</b> with flavorful rice, a rich Mughalai gravy, and authentic taste. A must try signature dish at Afzal Mao!",
    ButterChicken:
      "Savor Afzal Mao's timeless <b>Butter Chicken</b>: grilled chicken in spicy, creamy gravy. Perfect with roti, naan, or rice!",
    CrispyChicken:
      "Savor the perfect <b>Crispy Chicken</b> at Afzal Mao: tender inside, crunchy outside. Ideal as a starter or alongside your main course!",
  };
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5 ">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10 text-brightColor">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard
          img={img1}
          name="Sophia Azura"
          review={Customer_Reviews.ChickenKepsa}
        />
        <ReviewCard
          img={img2}
          name="John Deo"
          review={Customer_Reviews.ButterChicken}
        />
        <ReviewCard
          img={img3}
          name="Victoria Zoe"
          review={Customer_Reviews.CrispyChicken}
        />
      </div>
    </div>
  );
};

export default Review;
