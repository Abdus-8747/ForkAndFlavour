import React from "react";
import Card from "./Card";
import FoodData from "../data/FoodData";
import toast, {Toaster} from "react-hot-toast";
import { useSelector } from "react-redux";

const Fooditems = () => {
  const category = useSelector((state) => state.category.category);
  const handleToast = (name) => toast.success(`Added ${name}`);

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {FoodData.filter((food) => category === "All" || food.category === category).map((food) => (
        <Card
          key={food.id}
          id={food.id}
          img={food.img}
          name={food.name}
          price={food.price}
          desc={food.desc}
          category={food.category}
          rating={food.rating}
          handleToast={handleToast}
        />
      ))}
    </div>
    </>
    
  );
};

export default Fooditems;
