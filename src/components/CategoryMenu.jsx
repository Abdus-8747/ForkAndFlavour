import React, { useEffect, useState } from 'react';
import FoodData from '../data/FoodData';
import { useDispatch,useSelector } from 'react-redux';
import { setCategory as setReduxCategory } from '../redux/CategorySlice';

const CategoryMenu = () => {
  const [localCategory, setLocalCategory] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setLocalCategory(uniqueCategories);
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category)

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold mt-8">Find The Best Food</h3>

      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
      <button
          onClick={() => dispatch(setReduxCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {localCategory.map((cat, index) => (
          <button
            onClick={() => {dispatch(setReduxCategory(cat));
            }}
            key={index}
            className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
