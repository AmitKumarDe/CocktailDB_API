import React, { useState } from "react";
import "./SideBar.css";
import { BsArrowRight } from "react-icons/bs";
import Categories from "./Categories";

const SideBar = () => {
  const [data, setData] = useState(Categories);
  const[active,setActive]=useState("");

  console.log(data);
  const filterItem = (categItem) => {
    // console.log(CategoriesList.strCategory);
    const updateItems = Categories.filter((curElem) => {
      return curElem.strCategory === categItem;
    });
    console.log(updateItems);
    setData(updateItems);
    setActive(categItem.target.element);
    console.log(categItem.target.element);
  };

  return (
    <div className="menu-sidebar col-md-4">
      <div className="menu filters shadow-sm rounded bg-white mb-3">
        <div className="filters-header border-bottom pl-4 pr-4 pt-3 pb-3">
          <h5 className=" text-capitalize ">menu</h5>
        </div>
        <div className="menu-area scroll-box ">
          <div className="menu-item">
            <button
              href="#Ordinary_Drink"
              onClick={() => filterItem("Ordinary Drink")}
              className={active === "Ordinary Drink"? 'active': null}
            >
              Ordinary Drink <BsArrowRight />
            </button>
          </div>
          <div className="menu-item">
            <button href="#Coffee" onClick={() => filterItem("Cocktail")}>
              Cocktail
              <BsArrowRight />
            </button>
          </div>
          <div className="menu-item">
            <button href="#Tea" onClick={() => filterItem("Coffee / Tea")}>
              Coffee / Tea
              <BsArrowRight />
            </button>
          </div>
          <div className="menu-item">
            <button
              href="#Homemade_Liqueur"
              onClick={() => filterItem("Homemade Liqueur")}
            >
              Homemade Liqueur
              <BsArrowRight />
            </button>
          </div>
          <div className="menu-item">
            <button href="#Shot" onClick={() => filterItem("Shot")}>
              Shot
              <BsArrowRight />
            </button>
          </div>
          <div className="menu-item">
            <button href="#Shake" onClick={() => filterItem("Shake")}>
              Shake
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
